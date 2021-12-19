const { DataTypes } = require("sequelize");
const sequelize = require("./db.js");

const Employee = sequelize.define(
	"Empoyee",
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		timestamps: true,
	},
);

module.exports = Employee;
