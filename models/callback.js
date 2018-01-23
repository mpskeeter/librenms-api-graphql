/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let callback = sequelize.define('callback',
		{
			callbackId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'callback_id'
			},
			name: {
				type: DataTypes.CHAR(64),
				allowNull: false,
				field: 'name'
			},
			value: {
				type: DataTypes.CHAR(64),
				allowNull: false,
				field: 'value'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'callback'
		}
	);

	callback.associate = function(models) {
		// callback.belongsTo(models.devices, {foreignKey: 'deviceId', targetKey: 'deviceId', onDelete: 'CASCADE'});
	}

	return callback;
};
