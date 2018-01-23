/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let mibdefs = sequelize.define('mibdefs',
		{
			module: {
				type: DataTypes.STRING(255),
				allowNull: false,
				primaryKey: true,
				field: 'module'
			},
			mib: {
				type: DataTypes.STRING(255),
				allowNull: false,
				primaryKey: true,
				field: 'mib'
			},
			objectType: {
				type: DataTypes.STRING(255),
				allowNull: false,
				primaryKey: true,
				field: 'object_type'
			},
			oid: {
				type: DataTypes.STRING(255),
				allowNull: false,
				field: 'oid'
			},
			syntax: {
				type: DataTypes.STRING(255),
				allowNull: false,
				field: 'syntax'
			},
			description: {
				type: DataTypes.STRING(255),
				allowNull: true,
				field: 'description'
			},
			maxAccess: {
				type: DataTypes.STRING(255),
				allowNull: true,
				field: 'max_access'
			},
			status: {
				type: DataTypes.STRING(255),
				allowNull: true,
				field: 'status'
			},
			includedBy: {
				type: DataTypes.STRING(255),
				allowNull: false,
				field: 'included_by'
			},
			lastModified: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
				field: 'last_modified'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'mibdefs'
		}
	);

	return mibdefs;
};
