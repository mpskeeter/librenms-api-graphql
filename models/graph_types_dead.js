/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let graphTypesDead = sequelize.define('graphTypesDead',
		{
			graphType: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'graph_type'
			},
			graphSubtype: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'graph_subtype'
			},
			graphSection: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'graph_section'
			},
			graphDescr: {
				type: DataTypes.STRING(64),
				allowNull: false,
				field: 'graph_descr'
			},
			graphOrder: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'graph_order'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'graph_types_dead'
		}
	);

	graphTypesDead.associate = function(models) {
	}

	return graphTypesDead;
};
