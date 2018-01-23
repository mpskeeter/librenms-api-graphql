import express         from 'express';
import bodyParser      from 'body-parser';
import fs              from 'fs';
import path            from 'path';
import {
  graphqlExpress,
  graphiqlExpress,
}                      from 'apollo-server-express'
import {
  makeExecutableSchema
}                      from 'graphql-tools';
import {
  mergeStrings
}                      from 'gql-merge';
import DataLoader      from 'dataloader';
import fixtures        from 'sequelize-fixtures';
import _               from 'lodash';

import resolvers       from './resolvers';
import models          from './models';

const typesDir = path.resolve(__dirname, './gql_schema');
const typeFiles = fs.readdirSync(typesDir);
const types = typeFiles.map(file => fs.readFileSync(path.join(typesDir, file), 'utf-8'));
const typeDefs = mergeStrings(types);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const port = 4000;
const app = express();

const batchPortStatistics = async (keys, {portStatistics}) => {
  const dataResults = await portStatistics.findAll({
    raw: true,
    where: {
      portId: {
        $in: keys,
      },
    },
  });
  const data = _.groupBy(dataResults, 'portId');

  return keys.map(k => data[k] || []);
};

const batchPorts = async (keys, {ports}) => {
  const dataResults = await ports.findAll({
    raw: true,
    where: {
      portId: {
        $in: keys,
      },
    },
  });
  const data = _.groupBy(dataResults, 'portId');

  return keys.map(k => data[k] || []);
};

const batchApplicationMetrics = async (keys, {applicationMetrics}) => {
  const dataResults = await applicationMetrics.findAll({
    raw: true,
    where: {
      appId: {
        $in: keys,
      },
    },
  });
  const data = _.groupBy(dataResults, 'appId');

  return keys.map(k => data[k] || []);
};

const batchIpv4Address = async (keys, {ipv4Addresses}) => {
  const dataResults = await ipv4Addresses.findAll({
    raw: true,
    where: {
      portId: {
        $in: keys,
      },
    },
  });
  const data = _.groupBy(dataResults, 'portId');

  return keys.map(k => data[k] || []);
};

const batchIpv6Address = async (keys, {ipv6Addresses}) => {
  const dataResults = await ipv6Addresses.findAll({
    raw: true,
    where: {
      portId: {
        $in: keys,
      },
    },
  });
  const data = _.groupBy(dataResults, 'portId');

  return keys.map(k => data[k] || []);
};

const batchProcessors = async (keys, {processors}) => {
  const dataResults = await processors.findAll({
    raw: true,
    where: {
      hrDeviceId: {
        $in: keys,
      },
    },
  });
  const data = _.groupBy(dataResults, 'hrDeviceId');

  return keys.map(k => data[k] || []);
};

const loaders = {
  // devices: new DataLoader(keys => batchDevices(keys, models)),
  portsLoader: new DataLoader(keys => batchPorts(keys, models)),
  applicationMetricsLoader: new DataLoader(keys => batchApplicationMetrics(keys, models)),
  ipv4AddressLoader: new DataLoader(keys => batchIpv4Address(keys, models)),
  ipv6AddressLoader: new DataLoader(keys => batchIpv6Address(keys, models)),
  processorsLoader: new DataLoader(keys => batchProcessors(keys, models)),
  portStatisticsLoader: new DataLoader(keys => batchPortStatistics(keys, models)),
};

// The GraphQL endpoint
app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({
    schema,
    context: {models, loaders},
  })
);

// GraphiQL, a visual editor for queries
app.use(
  '/graphiql',
  graphiqlExpress({ endpointURL: '/graphql' })
);

//Start the server
models.sequelize
  .query('SET FOREIGN_KEY_CHECKS = 0')
  .then(function() {
    models.sequelize
      // .sync({force: false})
      .sync({force: true})
      .then(function() {
        models.sequelize
          .query('SET FOREIGN_KEY_CHECKS = 1')
          .then(function() {
            console.log('Database synchronised.');

            //can use glob syntax to select multiple files
            fixtures.loadFile('fixtures/*.js', models)
              .then(function(){
                app.listen(port, () => {
                  console.log('Go to http://localhost:' + port + '/graphiql to run queries!');
                })
              })


            // app.listen(port, () => {
            //   console.log('Go to http://localhost:' + port + '/graphiql to run queries!');
            // })
          })
        })
  });

// app.listen(port, () => {
//   console.log('Go to http://localhost:' + port + '/graphiql to run queries!');
// });
