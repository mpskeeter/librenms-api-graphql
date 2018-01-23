/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let componentStatuslog = sequelize.define('componentStatuslog',
		{
			id: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'id'
			},
			componentId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				// references: {
				// 	model: 'component',
				// 	key: 'id'
				// },
				field: 'component_id'
			},
			status: {
				type: DataTypes.INTEGER(1),
				allowNull: false,
				defaultValue: '0',
				field: 'status'
			},
			message: {
				type: DataTypes.TEXT,
				allowNull: true,
				field: 'message'
			},
			timestamp: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
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
			tableName: 'component_statuslog'
		}
	);

	componentStatuslog.associate = function(models) {
		componentStatuslog.belongsTo(models.component, {foreignKey: 'componentId', sourceKey: 'id'})
	}

	return componentStatuslog;
};
