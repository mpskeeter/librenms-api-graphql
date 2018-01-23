'use strict';
module.exports = (sequelize, DataTypes) => {
  let deviceGraphs = sequelize.define('deviceGraphs',
    {
      deviceId: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        field: 'device_id'
      },
      graph: {
        type: DataTypes.STRING(255),
        allowNull: true,
        field: 'graph'
      }
    },
    {
      // don't add the timestamp attributes (updatedAt, createdAt)
      timestamps: false,

      // don't use camelcase for automatically added attributes but underscore style
      // so updatedAt will be updated_at
      underscored: true,

      // define the table's name
      tableName: 'device_graphs'
    }
  );

  deviceGraphs.associate = function(models) {
    deviceGraphs.belongsTo(models.devices, {foreignKey: 'deviceId', targetKey: 'deviceId'});
  }

  return deviceGraphs;
};
