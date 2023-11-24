const { Sequelize, DataTypes } = require('sequelize');
const { Op } = require('sequelize');
const sequelizeConfig = require('./sequelizeConfig');

const sequelize = new Sequelize(sequelizeConfig.development);

// Definición del modelo
const AuditLog = sequelize.define('audit_log', {
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

const today = new Date();
const yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);

// Consulta para obtener registros de auditoría del último día
AuditLog.findAll({
  where: {
    timestamp: {
      [Op.gte]: yesterday, 
      [Op.lt]: today, 
    },
  },
})
  .then((auditLogs) => {
    // Borrado de registros de auditoría del último día
    return AuditLog.destroy({
      where: {
        timestamp: {
          [Op.gte]: yesterday,
          [Op.lt]: today,
        },
      },
    });
  })
  .then((deletedRows) => {
    console.log(`${deletedRows} registros de auditoría del último día fueron borrados.`);
  })
  .catch((error) => {
    console.error('Error:', error);
  })
  .finally(() => {
    // Cierra la conexión a la base de datos al finalizar
    sequelize.close();
  });
