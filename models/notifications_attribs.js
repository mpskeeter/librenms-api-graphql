/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let notificationsAttribs = sequelize.define('notificationsAttribs',
		{
			attribId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'attrib_id'
			},
			notificationsId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'notifications_id'
			},
			userId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'user_id'
			},
			key: {
				type: DataTypes.STRING(255),
				allowNull: false,
				defaultValue: '',
				field: 'key'
			},
			value: {
				type: DataTypes.STRING(255),
				allowNull: false,
				defaultValue: '',
				field: 'value'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'notifications_attribs'
		}
	);

	notificationsAttribs.associate = function(models) {
		notificationsAttribs.belongsTo(models.notifications, {foreignKey: 'notificationsId', sourceKey: 'notificationsId', onDelete: 'CASCADE'})
		notificationsAttribs.belongsTo(models.users, {foreignKey: 'userId', sourceKey: 'userId', onDelete: 'CASCADE'})
	}

	return notificationsAttribs;
};
