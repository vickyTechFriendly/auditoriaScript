// sequelizeConfig.js
const Sequelize = require("sequelize");

const sequelize = new Sequelize("thingsboard", "thingsboard", "my_password", {
  host: "localhost", 
  port: 5432,
  dialect: "postgres",
  define: {
    timestamps: false,
  },
});
console.log(sequelize)

sequelize 
  .authenticate()
  .then(function (err) {
    console.log("Connection has been established successfully.");
  })
  .catch(function (err) {
    console.log("Unable to connect to the database:", err);
  });

module.exports = sequelize;





/* module.exports = {
    username: 'thingsboard',
    password: "my_password",
    database: 'thingsboard',
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
  };  */