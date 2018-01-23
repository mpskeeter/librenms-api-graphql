/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let mefinfo = sequelize.define('mefinfo',
		{
			id: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'id'
			},
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'device_id'
			},
			mefId: {
				type: DataTypes.INTEGER(32),
				allowNull: false,
				field: 'mefID'
			},
			mefType: {
				type: DataTypes.STRING(128),
				allowNull: false,
				field: 'mefType'
			},
			mefIdent: {
				type: DataTypes.STRING(128),
				allowNull: false,
				field: 'mefIdent'
			},
			mefMtu: {
				type: DataTypes.INTEGER(16),
				allowNull: false,
				defaultValue: '1500',
				field: 'mefMTU'
			},
			mefAdmState: {
				type: DataTypes.STRING(128),
				allowNull: false,
				field: 'mefAdmState'
			},
			mefRowState: {
				type: DataTypes.STRING(128),
				allowNull: false,
				field: 'mefRowState'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'mefinfo'
		}
	);

	mefinfo.associate = function(models) {
		mefinfo.belongsTo(models.devices, {foreignKey: 'deviceId', sourceKey: 'deviceId'})
		// mefinfo.belongsTo(models.devices, {foreignKey: 'remoteDeviceId', sourceKey: 'deviceId'})
	}

	return mefinfo;
};
