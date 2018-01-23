/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let macAccounting = sequelize.define('macAccounting',
		{
			maId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'ma_id'
			},
			portId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'port_id'
			},
			mac: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'mac'
			},
			inOid: {
				type: DataTypes.STRING(128),
				allowNull: false,
				field: 'in_oid'
			},
			outOid: {
				type: DataTypes.STRING(128),
				allowNull: false,
				field: 'out_oid'
			},
			bpsOut: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'bps_out'
			},
			bpsIn: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'bps_in'
			},
			cipMacHcSwitchedBytesInput: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'cipMacHCSwitchedBytes_input'
			},
			cipMacHcSwitchedBytesInputPrev: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'cipMacHCSwitchedBytes_input_prev'
			},
			cipMacHcSwitchedBytesInputDelta: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'cipMacHCSwitchedBytes_input_delta'
			},
			cipMacHcSwitchedBytesInputRate: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'cipMacHCSwitchedBytes_input_rate'
			},
			cipMacHcSwitchedBytesOutput: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'cipMacHCSwitchedBytes_output'
			},
			cipMacHcSwitchedBytesOutputPrev: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'cipMacHCSwitchedBytes_output_prev'
			},
			cipMacHcSwitchedBytesOutputDelta: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'cipMacHCSwitchedBytes_output_delta'
			},
			cipMacHcSwitchedBytesOutputRate: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'cipMacHCSwitchedBytes_output_rate'
			},
			cipMacHcSwitchedPktsInput: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'cipMacHCSwitchedPkts_input'
			},
			cipMacHcSwitchedPktsInputPrev: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'cipMacHCSwitchedPkts_input_prev'
			},
			cipMacHcSwitchedPktsInputDelta: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'cipMacHCSwitchedPkts_input_delta'
			},
			cipMacHcSwitchedPktsInputRate: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'cipMacHCSwitchedPkts_input_rate'
			},
			cipMacHcSwitchedPktsOutput: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'cipMacHCSwitchedPkts_output'
			},
			cipMacHcSwitchedPktsOutputPrev: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'cipMacHCSwitchedPkts_output_prev'
			},
			cipMacHcSwitchedPktsOutputDelta: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'cipMacHCSwitchedPkts_output_delta'
			},
			cipMacHcSwitchedPktsOutputRate: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'cipMacHCSwitchedPkts_output_rate'
			},
			pollTime: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'poll_time'
			},
			pollPrev: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'poll_prev'
			},
			pollPeriod: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'poll_period'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'mac_accounting'
		}
	);

	macAccounting.associate = function(models) {
		macAccounting.belongsTo(models.ports, {foreignKey: 'portId', sourceKey: 'portId', onDelete: 'CASCADE'});
	}

	return macAccounting;
};
