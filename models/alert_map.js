/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let alertMap = sequelize.define('alertMap',
		{
			id: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'id'
			},
			rule: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				defaultValue: '0',
				field: 'rule'
			},
			target: {
				type: DataTypes.STRING(255),
				allowNull: false,
				defaultValue: '',
				field: 'target'
			}
		}, {
			// don't add the timestamp attributes (updatedAt, createdAt)
      timestamps: false,

      // don't use camelcase for automatically added attributes but underscore style
      // so updatedAt will be updated_at
      underscored: true,

      // define the table's name
			tableName: 'alert_map'
		}
	);

	alertMap.associate = function(models) {
    // alertMap.belongsTo(models.devices, {foreignKey: 'deviceId', targetKey: 'deviceId', onDelete: 'CASCADE'});
  }

  return alertMap;
};
