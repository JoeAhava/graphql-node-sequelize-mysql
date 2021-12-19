const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLList,
} = require("graphql");
const cors = require("cors");
const sequelize = require("./db.js");
const EmployeeModel = require("./models/employee");
const { DataTypes } = require("sequelize");
const app = express();
try {
	// await sequelize.authenticate();
	// console.info("Success connecting mysql");
	// const newEmployee = EmployeeModel.build({
	// 	name: "John Doe",
	// });
	// await newEmployee.save();
} catch (err) {
	console.error(err);
}

const Employee = new GraphQLObjectType({
	name: "employee",
	fields: () => ({
		id: {
			type: GraphQLInt,
		},
		name: {
			type: GraphQLString,
		},
		city: {
			type: City,
			resolve: (employee) => cities.find((city) => city.id === employee.cityId),
		},
	}),
});

const City = new GraphQLObjectType({
	name: "city",
	fields: () => ({
		id: {
			type: GraphQLInt,
		},
		name: {
			type: GraphQLString,
		},
	}),
});

const rootQuery = new GraphQLObjectType({
	name: "Root",
	description: "Queries to access employee info along with cities",
	fields: () => ({
		employees: {
			type: new GraphQLList(Employee),
			description: "",
			resolve: () => EmployeeModel(sequelize, DataTypes).findAll(),
		},
		cities: {
			type: new GraphQLList(City),
			description: "",
			resolve: () => cities,
		},
	}),
});

const schema = new GraphQLSchema({
	query: rootQuery,
});

app.use(
	"/graphql",
	graphqlHTTP({
		graphiql: true,
		schema: schema,
	}),
);

app.use(express.json());
app.use(cors({}));
app.get("/", (req, res) => res.json({ message: "Welcome to API" }));
app.listen(process.env.PORT || 3001, "0.0.0.0", () =>
	console.log(`Server started on ${process.env.PORT || 3001}`),
);
