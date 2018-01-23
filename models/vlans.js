/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let vlans = sequelize.define('vlans',
		{
			vlanId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'vlan_id'
			},
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: true,
				field: 'device_id'
			},
			vlanVlan: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'vlan_vlan'
			},
			vlanDomain: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'vlan_domain'
			},
			vlanName: {
				type: DataTypes.STRING(64),
				allowNull: true,
				field: 'vlan_name'
			},
			vlanType: {
				type: DataTypes.STRING(16),
				allowNull: true,
				field: 'vlan_type'
			},
			vlanMtu: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'vlan_mtu'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
      timestamps: false,

      // don't use camelcase for automatically added attributes but underscore style
      // so updatedAt will be updated_at
      underscored: true,

      // define the table's name
			tableName: 'vlans'
		}
	);

	vlans.associate = function(models) {
    vlans.belongsTo(models.devices, {foreignKey: 'deviceId', sourceKey: 'deviceId'});
		vlans.hasMany(models.portsFdb, {foreignKey: 'vlanId', sourceKey: 'vlanId'});
	};

	return vlans;
};
