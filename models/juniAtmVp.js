/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let juniAtmVp = sequelize.define('juniAtmVp',
		{
			juniAtmVpId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'juniAtmVp_id'
			},
			portId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'port_id'
			},
			vpId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'vp_id'
			},
			vpDescr: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'vp_descr'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'juniAtmVp'
		}
	);

	juniAtmVp.associate = function(models) {
		juniAtmVp.belongsTo(models.ports, {foreignKey: 'portId', sourceKey: 'portId'});
	}

	return juniAtmVp;
};
