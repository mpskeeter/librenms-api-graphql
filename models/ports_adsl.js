/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let portsAdsl = sequelize.define('portsAdsl',
		{
			portId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'port_id'
			},
			// portAdslUpdated: {
			// 	type: DataTypes.DATE,
			// 	allowNull: false,
			// 	defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			// 	field: 'port_adsl_updated'
			// },
			adslLineCoding: {
				type: DataTypes.STRING(8),
				allowNull: false,
				field: 'adslLineCoding'
			},
			adslLineType: {
				type: DataTypes.STRING(16),
				allowNull: false,
				field: 'adslLineType'
			},
			adslAtucInvVendorId: {
				type: DataTypes.STRING(8),
				allowNull: false,
				field: 'adslAtucInvVendorID'
			},
			adslAtucInvVersionNumber: {
				type: DataTypes.STRING(8),
				allowNull: false,
				field: 'adslAtucInvVersionNumber'
			},
			adslAtucCurrSnrMgn: {
				type: DataTypes.DECIMAL,
				allowNull: false,
				field: 'adslAtucCurrSnrMgn'
			},
			adslAtucCurrAtn: {
				type: DataTypes.DECIMAL,
				allowNull: false,
				field: 'adslAtucCurrAtn'
			},
			adslAtucCurrOutputPwr: {
				type: DataTypes.DECIMAL,
				allowNull: false,
				field: 'adslAtucCurrOutputPwr'
			},
			adslAtucCurrAttainableRate: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'adslAtucCurrAttainableRate'
			},
			adslAtucChanCurrTxRate: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'adslAtucChanCurrTxRate'
			},
			adslAturInvSerialNumber: {
				type: DataTypes.STRING(8),
				allowNull: false,
				field: 'adslAturInvSerialNumber'
			},
			adslAturInvVendorId: {
				type: DataTypes.STRING(8),
				allowNull: false,
				field: 'adslAturInvVendorID'
			},
			adslAturInvVersionNumber: {
				type: DataTypes.STRING(8),
				allowNull: false,
				field: 'adslAturInvVersionNumber'
			},
			adslAturChanCurrTxRate: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'adslAturChanCurrTxRate'
			},
			adslAturCurrSnrMgn: {
				type: DataTypes.DECIMAL,
				allowNull: false,
				field: 'adslAturCurrSnrMgn'
			},
			adslAturCurrAtn: {
				type: DataTypes.DECIMAL,
				allowNull: false,
				field: 'adslAturCurrAtn'
			},
			adslAturCurrOutputPwr: {
				type: DataTypes.DECIMAL,
				allowNull: false,
				field: 'adslAturCurrOutputPwr'
			},
			adslAturCurrAttainableRate: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'adslAturCurrAttainableRate'
			}
		},
		{
			// don't forget to enable timestamps!
		  timestamps: true,

		  // I don't want createdAt
		  createdAt: false,

		  // I want updatedAt to actually be called updateTimestamp
		  updatedAt: 'portAdslUpdated',

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'ports_adsl'
		}
	);

	portsAdsl.associate = function(models) {
		portsAdsl.belongsTo(models.ports, {foreignKey: 'portId', targetKey: 'portId', onDelete: 'CASCADE'});
	}

	return portsAdsl;
};
