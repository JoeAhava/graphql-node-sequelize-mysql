const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("test-graphql", "root", "test1234", {
	host: "localhost",
	port: 3306,
	dialect: "mysql",
});

module.exports = sequelize;
