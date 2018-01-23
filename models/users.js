'use strict';
module.exports = (sequelize, DataTypes) => {
  let users = sequelize.define('users',
		{
			userId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'user_id'
			},
			username: {
				type: DataTypes.STRING(255),
				allowNull: false,
				unique: true,
				field: 'username'
			},
			password: {
				type: DataTypes.STRING(60),
				allowNull: true,
				field: 'password'
			},
			realname: {
				type: DataTypes.STRING(64),
				allowNull: false,
				field: 'realname'
			},
			email: {
				type: DataTypes.STRING(64),
				allowNull: false,
				field: 'email',
        validate: {
          isEmail: true,            // checks for email format (foo@bar.com)
        },
			},
			descr: {
				type: DataTypes.CHAR(30),
				allowNull: false,
				field: 'descr'
			},
			level: {
				type: DataTypes.INTEGER(4),
				allowNull: false,
				defaultValue: '0',
				field: 'level'
			},
			canModifyPasswd: {
				type: DataTypes.INTEGER(4),
				allowNull: false,
				defaultValue: '1',
				field: 'can_modify_passwd'
			},
			// createdAt: {
			// 	type: DataTypes.DATE,
			// 	allowNull: false,
			// 	defaultValue: '1970-01-02 05:00:01',
			// 	field: 'created_at'
			// },
			// updatedAt: {
			// 	type: DataTypes.DATE,
			// 	allowNull: false,
			// 	defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			// 	field: 'updated_at'
			// },
			rememberToken: {
				type: DataTypes.STRING(100),
				allowNull: true,
				field: 'remember_token'
			}
		},
    {
      // don't add the timestamp attributes (updatedAt, createdAt)
      timestamps: true,

      // don't use camelcase for automatically added attributes but underscore style
      // so updatedAt will be updated_at
      underscored: false,

      // I don't want createdAt
      createdAt: 'created_at',

      // I want updatedAt to actually be called updateTimestamp
      updatedAt: 'updated_at',

      // define the table's name
      tableName: 'users'
    }
  );

  users.associate = function(models) {
    let stdAssociation = {foreignKey: 'userId', sourceKey: 'userId'}
    users.hasMany(models.billPerms,            stdAssociation)
    users.hasMany(models.dashboards,           stdAssociation)
    users.hasMany(models.devicesPerms,         stdAssociation)
    users.hasMany(models.portsPerms,           stdAssociation)
    users.hasMany(models.usersPrefs,           stdAssociation)
    users.hasMany(models.usersWidgets,         stdAssociation)
    users.hasMany(models.notificationsAttribs, stdAssociation)
  }

  return users;
};
