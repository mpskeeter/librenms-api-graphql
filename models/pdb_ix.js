/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let pdbIx = sequelize.define('pdbIx',
		{
			pdbIxId: {
				type: DataTypes.INTEGER(10).UNSIGNED,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'pdb_ix_id'
			},
			ixId: {
				type: DataTypes.INTEGER(10).UNSIGNED,
				allowNull: false,
				field: 'ix_id'
			},
			name: {
				type: DataTypes.STRING(255),
				allowNull: false,
				field: 'name'
			},
			asn: {
				type: DataTypes.INTEGER(10).UNSIGNED,
				allowNull: false,
				field: 'asn'
			},
			timestamp: {
				type: DataTypes.INTEGER(10).UNSIGNED,
				allowNull: false,
				field: 'timestamp'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'pdb_ix'
		}
	);

	return pdbIx;
};
