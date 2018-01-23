/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let portAssociationMode = sequelize.define('portAssociationMode',
		{
			pomId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'pom_id'
			},
			name: {
				type: DataTypes.STRING(12),
				allowNull: false,
				field: 'name'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'port_association_mode'
		}
	);

	return portAssociationMode;
};
