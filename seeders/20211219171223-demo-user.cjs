"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("Employees", [
			{
				name: "John Doe",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "Jane Doe",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "James Mathew",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "Joshua Williams",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Employees", null, {});
	},
};
