const Sequelize = require("sequelize");

let sql;

if (process.env.DATABASE_URL) {
	 sql = new Sequelize(process.env.DATABASE_URL);
}
else {
	 sql = new Sequelize({
		username: "postgres",
		database: "blog",
		password: "don",
		host: "localhost",
		port: 5432,
		dialect: "postgres",
	});
}

module.exports = sql;
