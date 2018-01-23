'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    let users = queryInterface.createTable('users',
      {
  			userId: {
  				type: Sequelize.INTEGER(11).UNSIGNED,
  				allowNull: false,
  				primaryKey: true,
  				autoIncrement: true,
  				field: 'user_id'
  			},
  			username: {
  				type: Sequelize.STRING(255),
  				allowNull: false,
  				unique: true,
  				field: 'username'
  			},
  			password: {
  				type: Sequelize.STRING(60),
  				allowNull: true,
  				field: 'password'
  			},
  			realname: {
  				type: Sequelize.STRING(64),
  				allowNull: false,
  				field: 'realname'
  			},
  			email: {
  				type: Sequelize.STRING(64),
  				allowNull: false,
  				field: 'email'
  			},
  			descr: {
  				type: Sequelize.CHAR(30),
  				allowNull: false,
  				field: 'descr'
  			},
  			level: {
  				type: Sequelize.INTEGER(4),
  				allowNull: false,
  				defaultValue: 0,
  				field: 'level'
  			},
  			canModifyPasswd: {
  				type: Sequelize.INTEGER(4),
  				allowNull: false,
  				defaultValue: '1',
  				field: 'can_modify_passwd'
  			},
  			// createdAt: {
  			// 	type: Sequelize.DATE,
  			// 	allowNull: false,
  			// 	defaultValue: '1970-01-02 05:00:01',
  			// 	field: 'created_at'
  			// },
  			// updatedAt: {
  			// 	type: Sequelize.DATE,
  			// 	allowNull: false,
  			// 	defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  			// 	field: 'updated_at'
  			// },
  			rememberToken: {
  				type: Sequelize.STRING(100),
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
      
    }

    return users;
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
