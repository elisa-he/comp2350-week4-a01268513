const mysql = require('mysql2');

const is_heroku = process.env.IS_HEROKU || false;


//mysql://b6fb24cb4c8c37:702be0f5@us-cdbr-east-03.cleardb.com/heroku_a79dfbc72e06757?reconnect=true
const dbConfigHeroku = {
	host: "us-cdbr-east-03.cleardb.com",
	user: "b6fb24cb4c8c37",
	password: "702be0f5",
	database: "heroku_a79dfbc72e06757",
	multipleStatements: false
};

const dbConfigLocal = {
	host: "qao3ibsa7hhgecbv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user: "xmymwil64iqqnb97",
	password: "xzil4inuhju2qg5t",
	database: "sps2kx7fb0h92fir",
	multipleStatements: false
};

if (is_heroku) {
	var database = mysql.createPool(dbConfigHeroku);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
		
