const connection = require("../sequelizeConfig.js");
const Sequelize = require("sequelize");

// Definición del modelo
const Customer = connection.define('customer', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
    },
    created_time: {
        type: Sequelize.BIGINT,
        allowNull: false,
    },
    additional_info: {
        type: Sequelize.CHAR,
        allowNull: false,
    },
    address: {
        type: Sequelize.CHAR,
        allowNull: false,
    },
    address2: {
        type: Sequelize.CHAR,
        allowNull: false,
    },
    city: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    },
    country: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    },
    email: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    },
    phone: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    },
    state: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    },
    tenant_id: {
        type: Sequelize.UUID,
        allowNull: false,
    },
    title: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    },
    zip: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    },
    external_id: {
        type: Sequelize.UUID,
        allowNull: false,
    },
}, {
    tableName: 'customers',
    timestamps: true,
    sequelize: connection,
});

// Función para obtener y eliminar el último registro
async function deleteLastClient() {
    try {
        const allClients = await Customer.findAll();
        if (allClients.length > 0) {
            const lastClient = allClients[allClients.length - 1];

            await lastClient.destroy();

            console.log('Último cliente eliminado con éxito.');
        } else {
            console.log('No hay clientes para eliminar.');
        }
    } catch (error) {
        console.error('Error al obtener y eliminar el último cliente:', error);
    } finally {
        await connection.close();
    }
}

deleteLastClient();