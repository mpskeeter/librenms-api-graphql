import fs        from 'fs';
import path      from 'path';
import Sequelize from 'sequelize';

const basename  = path.basename(__filename);
// const model_dir = __dirname + '/librenms';
const model_dir = __dirname;

var db        = {};

const sequelize = new Sequelize(
  'librenms_graphql',
  'librenms',
  'Mast!Mage',
  {
    dialect: 'mysql',
    host: '10.0.3.10',
    port: 3307,
    define: { engine: 'InnoDB' },
    // operatorsAliases: false,
  }
);

fs
  .readdirSync(model_dir)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(model_dir, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  // console.log(modelName);
  // console.log('associate for: ' + db[modelName].associate);
  if (db[modelName].associate) {
    // console.log('Executing associate for ' + modelName);
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
