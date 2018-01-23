'use strict';
module.exports = (sequelize, DataTypes) => {
  var devices = sequelize.define('devices',
    {
      deviceId: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'device_id'
      },
      hostname: {
        type: DataTypes.STRING(128),
        allowNull: false,
        field: 'hostname'
      },
      sysName: {
        type: DataTypes.STRING(128),
        allowNull: true,
        field: 'sysName'
      },
      ip: {
        type: "VARBINARY(16)",
        allowNull: true,
        field: 'ip'
      },
      community: {
        type: DataTypes.STRING(255),
        allowNull: true,
        field: 'community'
      },
      authlevel: {
        type: DataTypes.ENUM('noAuthNoPriv','authNoPriv','authPriv'),
        allowNull: true,
        field: 'authlevel'
      },
      authname: {
        type: DataTypes.STRING(64),
        allowNull: true,
        field: 'authname'
      },
      authpass: {
        type: DataTypes.STRING(64),
        allowNull: true,
        field: 'authpass'
      },
      authalgo: {
        type: DataTypes.ENUM('MD5','SHA'),
        allowNull: true,
        field: 'authalgo'
      },
      cryptopass: {
        type: DataTypes.STRING(64),
        allowNull: true,
        field: 'cryptopass'
      },
      cryptoalgo: {
        type: DataTypes.ENUM('AES','DES',''),
        allowNull: true,
        field: 'cryptoalgo'
      },
      snmpver: {
        type: DataTypes.STRING(4),
        allowNull: false,
        defaultValue: 'v2c',
        field: 'snmpver'
      },
      port: {
        type: DataTypes.INTEGER(5).UNSIGNED,
        allowNull: false,
        defaultValue: '161',
        field: 'port'
      },
      transport: {
        type: DataTypes.STRING(16),
        allowNull: false,
        defaultValue: 'udp',
        field: 'transport'
      },
      timeout: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        field: 'timeout'
      },
      retries: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        field: 'retries'
      },
      snmpDisable: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        defaultValue: '0',
        field: 'snmp_disable'
      },
      bgpLocalAs: {
        type: DataTypes.STRING(16),
        allowNull: true,
        field: 'bgpLocalAs'
      },
      sysObjectId: {
        type: DataTypes.STRING(128),
        allowNull: true,
        field: 'sysObjectID'
      },
      sysDescr: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'sysDescr'
      },
      sysContact: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'sysContact'
      },
      version: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'version'
      },
      hardware: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'hardware'
      },
      features: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'features'
      },
      location: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'location'
      },
      os: {
        type: DataTypes.STRING(32),
        allowNull: true,
        field: 'os'
      },
      status: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        defaultValue: '0',
        field: 'status'
      },
      statusReason: {
        type: DataTypes.STRING(50),
        allowNull: true,
        // allowNull: false,
        field: 'status_reason'
      },
      ignore: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        defaultValue: '0',
        field: 'ignore'
      },
      disabled: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        defaultValue: '0',
        field: 'disabled'
      },
      uptime: {
        type: DataTypes.BIGINT,
        allowNull: true,
        field: 'uptime'
      },
      agentUptime: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        defaultValue: '0',
        field: 'agent_uptime'
      },
      lastPolled: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'last_polled'
      },
      lastPollAttempted: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'last_poll_attempted'
      },
      lastPolledTimetaken: {
        type: "DOUBLE(5,2)",
        allowNull: true,
        field: 'last_polled_timetaken'
      },
      lastDiscoveredTimetaken: {
        type: "DOUBLE(5,2)",
        allowNull: true,
        field: 'last_discovered_timetaken'
      },
      lastDiscovered: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'last_discovered'
      },
      lastPing: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'last_ping'
      },
      lastPingTimetaken: {
        type: "DOUBLE(5,2)",
        allowNull: true,
        field: 'last_ping_timetaken'
      },
      purpose: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'purpose'
      },
      type: {
        type: DataTypes.STRING(20),
        allowNull: false,
        defaultValue: '',
        field: 'type'
      },
      serial: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'serial'
      },
      icon: {
        type: DataTypes.STRING(255),
        allowNull: true,
        field: 'icon'
      },
      pollerGroup: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        defaultValue: '0',
        field: 'poller_group'
      },
      overrideSysLocation: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        defaultValue: '0',
        field: 'override_sysLocation'
      },
      notes: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'notes'
      },
      portAssociationMode: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        defaultValue: '1',
        field: 'port_association_mode'
      }
    },
    {
      // don't add the timestamp attributes (updatedAt, createdAt)
      timestamps: false,

      // don't use camelcase for automatically added attributes but underscore style
      // so updatedAt will be updated_at
      underscored: true,

      // define the table's name
      tableName: 'devices'
    }
  );

  devices.associate = function(models) {
    devices.hasMany(models.deviceRelationships, {foreignKey: 'parentDeviceId', sourceKey: 'deviceId'});
    devices.hasMany(models.deviceRelationships, {foreignKey: 'childDeviceId', sourceKey: 'deviceId'});
    // devices.hasMany(models.links, {foreignKey: 'localDeviceId', sourceKey: 'deviceId'})
		// devices.hasMany(models.links, {foreignKey: 'remoteDeviceId', sourceKey: 'deviceId'})

    let stdAssociation = {foreignKey: 'deviceId', sourceKey: 'deviceId'};

    devices.hasMany(models.applications, stdAssociation);
    devices.hasMany(models.alerts, stdAssociation);
    devices.hasMany(models.bgpPeers, stdAssociation);
    devices.hasMany(models.bgpPeersCbgp, stdAssociation);
    devices.hasMany(models.cefSwitching, stdAssociation);
    devices.hasMany(models.ciscoAsa, stdAssociation);
    devices.hasMany(models.component, stdAssociation);
    devices.hasMany(models.deviceGraphs, stdAssociation);
    devices.hasMany(models.deviceGroupDevice, stdAssociation);
    devices.hasMany(models.deviceMibs, stdAssociation);
    devices.hasMany(models.deviceOids, stdAssociation);
    devices.hasMany(models.devicePerf, stdAssociation);
    devices.hasMany(models.devicesAttribs, stdAssociation);
    devices.hasMany(models.devicesPerms, stdAssociation);
    devices.hasMany(models.entPhysical, stdAssociation);
    devices.hasMany(models.entPhysicalState, stdAssociation);
    devices.hasMany(models.entityState, stdAssociation);
    devices.hasMany(models.eventlog, stdAssociation);
    devices.hasMany(models.hrDevice, stdAssociation);
    devices.hasMany(models.ipsecTunnels, stdAssociation);
    devices.hasMany(models.loadbalancerRservers, stdAssociation);
    devices.hasMany(models.loadbalancerVservers, stdAssociation);
    devices.hasMany(models.mefinfo, stdAssociation);
    devices.hasMany(models.mempools, stdAssociation);
    devices.hasMany(models.muninPlugins, stdAssociation);
    devices.hasMany(models.netscalerVservers, stdAssociation);
    devices.hasMany(models.ospfAreas, stdAssociation);
    devices.hasMany(models.ospfInstances, stdAssociation);
    devices.hasMany(models.ospfNbrs, stdAssociation);
    devices.hasMany(models.ospfPorts, stdAssociation);
    devices.hasMany(models.packages, stdAssociation);
    devices.hasMany(models.pollers, stdAssociation);
    devices.hasMany(models.ports, stdAssociation);
    devices.hasMany(models.portsFdb, stdAssociation);
    devices.hasMany(models.portsStack, stdAssociation);
    devices.hasMany(models.portsStp, stdAssociation);
    devices.hasMany(models.portsVlans, stdAssociation);
    devices.hasMany(models.processes, stdAssociation);
    devices.hasMany(models.processors, stdAssociation);
    devices.hasMany(models.proxmox, stdAssociation);
    devices.hasMany(models.pseudowires, stdAssociation);
    devices.hasMany(models.route, stdAssociation);
    devices.hasMany(models.sensors, stdAssociation);
    devices.hasMany(models.services, stdAssociation);
    devices.hasMany(models.slas, stdAssociation);
    devices.hasMany(models.storage, stdAssociation);
    devices.hasMany(models.stp, stdAssociation);
    devices.hasMany(models.syslog, stdAssociation);
    devices.hasMany(models.tnmsneinfo, stdAssociation);
    devices.hasMany(models.toner, stdAssociation);
    devices.hasMany(models.ucdDiskio, stdAssociation);
    devices.hasMany(models.vminfo, stdAssociation);
    devices.hasMany(models.vrfLiteCisco, stdAssociation);
    devices.hasMany(models.vrfs, stdAssociation);
    devices.hasMany(models.wirelessSensors, stdAssociation);
  }

  // devices.seed = function(queryInterface, Sequelize) {
  //   queryInterface.bulkDelete('devices', null, {});
  //   return queryInterface.bulkInsert('devices', [
  //     {
  //       agent_uptime: '0',
  //       authalgo: null,
  //       authlevel: null,
  //       authname: null,
  //       authpass: null,
  //       bgpLocalAs: null,
  //       community: 'public',
  //       cryptoalgo: null,
  //       cryptopass: null,
  //       device_id: '1',
  //       disabled: '0',
  //       features: null,
  //       hardware: 'HL-2270DW [001ba9d17ade] (93)',
  //       hostname: 'brother-wired.skeeter-net.video',
  //       icon: 'brother.svg',
  //       ignore: '0',
  //       ip: '10.0.3.115',
  //       last_discovered: '2018-01-15 06:26:51',
  //       last_discovered_timetaken: '2.88',
  //       last_ping: '2018-01-15 11:37:45',
  //       last_ping_timetaken: '0.52',
  //       last_poll_attempted: null,
  //       last_polled: '2018-01-15 11:37:45',
  //       last_polled_timetaken: '3.82',
  //       location: '161 Joseph Alexander Dr, Fuquay Varina, NC, US',
  //       notes: null,
  //       os: 'brother',
  //       override_sysLocation: '0',
  //       poller_group: '0',
  //       port: '161',
  //       port_association_mode: '1',
  //       purpose: null,
  //       retries: null,
  //       serial: '01 15 55 36 32 36 37 34 4A 32 4E 31 35 37 38 34 ↵31',
  //       snmp_disable: '0',
  //       snmpver: 'v2c',
  //       status: '1',
  //       status_reason: '',
  //       sysContact: 'mpskeeter@gmail.com',
  //       sysDescr: 'Brother NC-8200h, Firmware Ver.1.10  (12.02.17),MID 84UC07',
  //       sysName: 'brother-wired',
  //       sysObjectID: '.1.3.6.1.4.1.2435.2.3.9.1',
  //       timeout: null,
  //       transport: 'udp',
  //       type: 'printer',
  //       uptime: '580845',
  //       version: '1.10',
  //     },
  //     {
  //       agent_uptime: '0',
  //       authalgo: null,
  //       authlevel: null,
  //       authname: null,
  //       authpass: null,
  //       bgpLocalAs: null,
  //       community: 'public',
  //       cryptoalgo: null,
  //       cryptopass: null,
  //       device_id: '2',
  //       disabled: '0',
  //       features: null,
  //       hardware: 'UAP-AC-HD',
  //       hostname: 'kitchen.skeeter-net.lan',
  //       icon: 'ubiquiti.svg',
  //       ignore: '0',
  //       ip: '10.0.1.250',
  //       last_discovered: '2018-01-15 12:26:08',
  //       last_discovered_timetaken: '3.46',
  //       last_ping: '2018-01-15 13:17:48',
  //       last_ping_timetaken: '0.30',
  //       last_poll_attempted: null,
  //       last_polled: '2018-01-15 13:17:48',
  //       last_polled_timetaken: '7.99',
  //       location: '161 Joseph Alexander Dr, Fuquay Varina, NC, US',
  //       notes: null,
  //       os: 'unifi',
  //       override_sysLocation: '0',
  //       poller_group: '0',
  //       port: '161',
  //       port_association_mode: '1',
  //       purpose: '',
  //       retries: null,
  //       serial: null,
  //       snmp_disable: '0',
  //       snmpver: 'v1',
  //       status: '1',
  //       status_reason: '',
  //       sysContact: 'root@localhost',
  //       sysDescr: 'UAP-AC-HD 3.9.19.8123',
  //       sysName: 'kitchen',
  //       sysObjectID: '.1.3.6.1.4.1.8072.3.2.10',
  //       timeout: null,
  //       transport: 'udp',
  //       type: 'wireless',
  //       uptime: '665300',
  //       version: '',
  //     },
  //     {
  //       agent_uptime: '0',
  //       authalgo: null,
  //       authlevel: null,
  //       authname: null,
  //       authpass: null,
  //       bgpLocalAs: null,
  //       community: 'public',
  //       cryptoalgo: null,
  //       cryptopass: null,
  //       device_id: '8',
  //       disabled: '0',
  //       features: null,
  //       hardware: 'Generic x86 64-bit',
  //       hostname: 'kali.skeeter-net.lan',
  //       icon: 'linux.svg',
  //       ignore: '0',
  //       ip: '10.0.1.172',
  //       last_discovered: '2018-01-15 12:26:31',
  //       last_discovered_timetaken: '3.27',
  //       last_ping: '2018-01-15 13:17:43',
  //       last_ping_timetaken: '0.30',
  //       last_poll_attempted: null,
  //       last_polled: '2018-01-15 13:17:43',
  //       last_polled_timetaken: '2.89',
  //       location: '161 Joseph Alexander Dr, Fuquay Varina, NC, US',
  //       notes: null,
  //       os: 'linux',
  //       override_sysLocation: '0',
  //       poller_group: '0',
  //       port: '161',
  //       port_association_mode: '1',
  //       purpose: null,
  //       retries: null,
  //       serial: null,
  //       snmp_disable: '0',
  //       snmpver: 'v2c',
  //       status: '1',
  //       status_reason: '',
  //       sysContact: 'Mark Peters <mpskeeter@gmail.com>',
  //       sysDescr: 'Linux parrot 4.13.0-parrot4-amd64 #1 SMP Parrot 4.13.4-2parrot0 (2017-10-17) x86_64',
  //       sysName: 'parrot',
  //       sysObjectID: '.1.3.6.1.4.1.8072.3.2.10',
  //       timeout: null,
  //       transport: 'udp',
  //       type: 'server',
  //       uptime: '110660',
  //       version: '4.13.0-parrot4-amd64',
  //     }
  //   ],{});
  // }

  return devices;
};
