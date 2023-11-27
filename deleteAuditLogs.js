const sequelize = require('./sequelizeConfig');
const AuditLog = require('./models/AuditLog');

const deleteRecords = async () => {
  try {
    const yesterday = new Date(new Date() - 24 * 60 * 60 * 1000); 
    
    await AuditLog.destroy({
      where: {
        created_time: {
          [sequelize.Op.lt]: yesterday.getTime(),
        },
      },
    });

    console.log('Registros eliminados correctamente.');
  } catch (error) {
    console.error('Error al eliminar registros:', error);
  } finally {
    await sequelize.close();
  }
};

deleteRecords();