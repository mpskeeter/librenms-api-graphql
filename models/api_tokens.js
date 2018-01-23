/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let apiTokens = sequelize.define('apiTokens',
		{
			id: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'id'
			},
			userId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'user_id'
			},
			tokenHash: {
				type: DataTypes.STRING(255),
				allowNull: true,
				unique: true,
				field: 'token_hash'
			},
			description: {
				type: DataTypes.STRING(100),
				allowNull: false,
				field: 'description'
			},
			disabled: {
				type: DataTypes.INTEGER(1),
				allowNull: false,
				defaultValue: '0',
				field: 'disabled'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: false,

			// define the table's name
			tableName: 'api_tokens'
		}
	);

	apiTokens.associate = function(models) {
		apiTokens.belongsTo(models.users, {foreignKey: 'userId', targetKey: 'userId', onDelete: 'CASCADE'})
	}

	return apiTokens;
};
