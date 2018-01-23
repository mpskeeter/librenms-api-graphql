export default {
  Query: {
    devices: (parent, args, {models}) => models.devices.findAll(),
    device:  (parent, {deviceId}, {models}) => models.devices.findOne({where: {deviceId}}),

    ports:   (parent, args, {models}) => models.ports.findAll(),
    port:    (parent, {portId}, {models}) => models.ports.findAll({where: {portId}}),
    bills:   (parent, args, {models}) => models.bills.findAll(),
    bill:    (parent, {billId}, {models}) => models.bills.findAll({where: {billId}}),
  },
  Mutation: {
    del_device_id:        (parent, {deviceId}, {models}) => models.devices.destroy({where: {deviceId}}),
    del_device_hostname:  (parent, {hostname}, {models}) => models.devices.destroy({where: {hostname}}),
  },
  Device: {
    // portCount: function({deviceId}, args, {models}) {
    //   return models.ports.findAll({where: {deviceId: deviceId}}).length;
    // },
    // portCount: ({deviceId}, args, {models}) => models.devices.findOne(
    //   {
    //     where: {deviceId},
    //     include: [{ attributes: [], model: models.ports }],
    //     attributes: {
    //       include: [
    //         [models.Sequelize.fn('COUNT', models.Sequelize.fn('DISTINCT', models.Sequelize.col('port_id'))), 'portCount'],
    //       ]
    //     }
    //   }
    // ),
    // {
    //   let portCount = models.ports.findAll(
    //     {
    //       where: {
    //         deviceId: deviceId,
    //       },
    //       attributes: [[models.sequelize.fn('COUNT',models.sequelize.col('port_id')), 'portCount']]
    //     }
    //   );
    //   return portCount.portCount;
    // },
    // portCount: ({deviceId}, args, {models}) => {
    //   let ports = models.ports.findAll({where: {deviceId}});
    //   // return ports;
    //   console.log(ports.length);
    //   return (ports.length === null ? 0 : ports.length);
    // },
    Pollers: ({deviceId}, args, {models}) => models.pollers.findAll({where: {devices: deviceId}}),
    Ports: ({deviceId}, args, {models}) => models.ports.findAll({where: {deviceId}}),
    Alerts: ({deviceId}, args, {models}) => models.alerts.findAll({where: {deviceId}}),
    // Children: ({deviceId}, args, {models}) => models.devices.findAll({where: {deviceId: deviceId}}),
    Attributes: ({deviceId}, args, {models}) => models.devicesAttribs.findAll({where: {deviceId}}),
    Permissions: ({deviceId}, args, {models}) => models.devicesPerms.findAll({where: {deviceId}}),
    Routes: ({deviceId}, args, {models}) => models.route.findAll({where: {deviceId}}),
    Toner: ({deviceId}, args, {models}) => models.toner.findAll({where: {deviceId}}),
    WirelessSensors: ({deviceId}, args, {models}) => models.wirelessSensors.findAll({where: {deviceId}}),
    Applications: ({deviceId}, args, {models}) => models.applications.findAll({where: {deviceId}}),
    Sensors: ({deviceId}, args, {models}) => models.sensors.findAll({where: {deviceId}}),
    Processes: ({deviceId}, args, {models}) => models.processes.findAll({where: {deviceId}}),
    Packages: ({deviceId}, args, {models}) => models.packages.findAll({where: {deviceId}}),
    Storage: ({deviceId}, args, {models}) => models.storage.findAll({where: {deviceId}}),
    hrDevices: ({deviceId}, args, {models}) => models.hrDevice.findAll({where: {deviceId}}),
    STP: ({deviceId}, args, {models}) => models.stp.findAll({where: {deviceId}}),
  },
  Applications: {
    // Metrics: ({appId}, args, {models}) => models.applicationMetrics.findAll({where: {appId}}),
    Metrics: ({appId}, args, {loaders}) => loaders.applicationMetricsLoader.load(appId),
  },
  Port: {
    // ipv4Address: ({portId}, args, {models}) => models.ipv4Addresses.findAll({where: {portId}}),
    // ipv6Address: ({portId}, args, {models}) => models.ipv6Addresses.findAll({where: {portId}}),
    ipv4Address: ({portId}, args, {loaders}) => loaders.ipv4AddressLoader.load(portId),
    ipv6Address: ({portId}, args, {loaders}) => loaders.ipv6AddressLoader.load(portId),
    PortStatistics: ({portId}, args, {loaders}) => loaders.portStatisticsLoader.load(portId),
  },
  ipAddresses: {
    // ipv4Address: ({portId}, args, {models}) => models.ipv4Addresses.findAll({where: {portId}}),
    // ipv6Address: ({portId}, args, {models}) => models.ipv6Addresses.findAll({where: {portId}}),
    ipv4Addresses: ({portId}, args, {loaders}) => loaders.ipv4AddressLoader.load(portId),
    ipv6Addresses: ({portId}, args, {loaders}) => loaders.ipv6AddressLoader.load(portId),
  },
  hrDevice: {
    // Processors: ({hrDeviceId}, args, {models}) => models.processors.findAll({where: {hrDeviceId}}),
    Processors: ({hrDeviceId}, args, {loaders}) => loaders.processorsLoader.load(hrDeviceId),
  },

  Bill: {
    // Metrics: ({appId}, args, {models}) => models.applicationMetrics.findAll({where: {appId}}),
    BillData: ({billId}, args, {models}) => models.billData.findAll(billId),
    BillHistory: ({billId}, args, {models}) => models.billHistory.findAll(billId),
    BillPerms: ({billId}, args, {models}) => models.billPerms.findAll(billId),
    BillPort: ({billId}, args, {models}) => models.billPorts.findAll(billId),
  },

  BillPerms: {
    User: ({userId}, args, {models}) => models.users.findAll(userId),
  },

  BillPort: {
    Port: ({portId}, args, {models}) => models.ports.findAll(portId),
  },

};
