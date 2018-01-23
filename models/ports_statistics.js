/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let portsStatistics = sequelize.define('portsStatistics',
		{
			portId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				field: 'port_id'
			},
			ifInNUcastPkts: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifInNUcastPkts'
			},
			ifInNUcastPktsPrev: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifInNUcastPkts_prev'
			},
			ifInNUcastPktsDelta: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifInNUcastPkts_delta'
			},
			ifInNUcastPktsRate: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'ifInNUcastPkts_rate'
			},
			ifOutNUcastPkts: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifOutNUcastPkts'
			},
			ifOutNUcastPktsPrev: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifOutNUcastPkts_prev'
			},
			ifOutNUcastPktsDelta: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifOutNUcastPkts_delta'
			},
			ifOutNUcastPktsRate: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'ifOutNUcastPkts_rate'
			},
			ifInDiscards: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifInDiscards'
			},
			ifInDiscardsPrev: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifInDiscards_prev'
			},
			ifInDiscardsDelta: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifInDiscards_delta'
			},
			ifInDiscardsRate: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'ifInDiscards_rate'
			},
			ifOutDiscards: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifOutDiscards'
			},
			ifOutDiscardsPrev: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifOutDiscards_prev'
			},
			ifOutDiscardsDelta: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifOutDiscards_delta'
			},
			ifOutDiscardsRate: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'ifOutDiscards_rate'
			},
			ifInUnknownProtos: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifInUnknownProtos'
			},
			ifInUnknownProtosPrev: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifInUnknownProtos_prev'
			},
			ifInUnknownProtosDelta: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifInUnknownProtos_delta'
			},
			ifInUnknownProtosRate: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'ifInUnknownProtos_rate'
			},
			ifInBroadcastPkts: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifInBroadcastPkts'
			},
			ifInBroadcastPktsPrev: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifInBroadcastPkts_prev'
			},
			ifInBroadcastPktsDelta: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifInBroadcastPkts_delta'
			},
			ifInBroadcastPktsRate: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'ifInBroadcastPkts_rate'
			},
			ifOutBroadcastPkts: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifOutBroadcastPkts'
			},
			ifOutBroadcastPktsPrev: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifOutBroadcastPkts_prev'
			},
			ifOutBroadcastPktsDelta: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifOutBroadcastPkts_delta'
			},
			ifOutBroadcastPktsRate: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'ifOutBroadcastPkts_rate'
			},
			ifInMulticastPkts: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifInMulticastPkts'
			},
			ifInMulticastPktsPrev: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifInMulticastPkts_prev'
			},
			ifInMulticastPktsDelta: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifInMulticastPkts_delta'
			},
			ifInMulticastPktsRate: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'ifInMulticastPkts_rate'
			},
			ifOutMulticastPkts: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifOutMulticastPkts'
			},
			ifOutMulticastPktsPrev: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifOutMulticastPkts_prev'
			},
			ifOutMulticastPktsDelta: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifOutMulticastPkts_delta'
			},
			ifOutMulticastPktsRate: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'ifOutMulticastPkts_rate'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'ports_statistics'
		}
	);

	portsStatistics.associate = function(models) {
		portsStatistics.belongsTo(models.ports, {foreignKey: 'portId', targetKey: 'portId', onDelete: 'CASCADE'});
	}

	return portsStatistics;
};
