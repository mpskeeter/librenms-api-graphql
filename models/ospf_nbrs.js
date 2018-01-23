/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let ospfNbrs = sequelize.define('ospfNbrs',
		{
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'device_id'
			},
			portId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'port_id'
			},
			ospfNbrId: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'ospf_nbr_id'
			},
			ospfNbrIpAddr: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'ospfNbrIpAddr',
				validate: {
					isIP: true,               // checks for IPv4 (129.89.23.1) or IPv6 format
				},
			},
			ospfNbrAddressLessIndex: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'ospfNbrAddressLessIndex'
			},
			ospfNbrRtrId: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'ospfNbrRtrId'
			},
			ospfNbrOptions: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'ospfNbrOptions'
			},
			ospfNbrPriority: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'ospfNbrPriority'
			},
			ospfNbrState: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'ospfNbrState'
			},
			ospfNbrEvents: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'ospfNbrEvents'
			},
			ospfNbrLsRetransQLen: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'ospfNbrLsRetransQLen'
			},
			ospfNbmaNbrStatus: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'ospfNbmaNbrStatus'
			},
			ospfNbmaNbrPermanence: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'ospfNbmaNbrPermanence'
			},
			ospfNbrHelloSuppressed: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'ospfNbrHelloSuppressed'
			},
			contextName: {
				type: DataTypes.STRING(128),
				allowNull: true,
				field: 'context_name'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'ospf_nbrs'
		}
	);

	ospfNbrs.associate = function(models) {
		ospfNbrs.belongsTo(models.devices, {foreignKey: 'deviceId', sourceKey: 'deviceId'});
		ospfNbrs.belongsTo(models.ports, {foreignKey: 'portId', sourceKey: 'portId'});
	}

	return ospfNbrs;
};
