const { DataTypes } = require('sequelize');
const sequelize = require('../sequelizeConfig');

const AuditLog = sequelize.define('AuditLog', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  created_time: {
    type: DataTypes.BIGINT,
    notNull: true,
  },
  tenant_id: {
    type: DataTypes.UUID,
    notNull: false,
  },
  customer_id: {
    type: DataTypes.UUID,
    notNull: false,
  },
  entity_id: {
    type: DataTypes.UUID,
    notNull: false,
  },
  entity_type: {
    type: DataTypes.CHAR(255),
    notNull: false,
  },
  entity_name: {
    type: DataTypes.CHAR(255),
    notNull: false,
  },
  user_id: {
    type: DataTypes.UUID,
    notNull: false,
  },
  user_name: {
    type: DataTypes.CHAR(255),
    notNull: false,
  },
action_type: {
    type: DataTypes.CHAR(255),
    notNull: false,
  },
  action_data: {
    type: DataTypes.CHAR(1000000),
    notNull: false,
  },
  action_status: {
    type: DataTypes.CHAR(255),
    notNull: false,
  },
  action_failure_details: {
    type: DataTypes.CHAR(1000000),
    notNull: false,
  },

}, {
  tableName: 'audit_log',
  timestamps: true,
  sequelize,
});

module.exports = AuditLog;