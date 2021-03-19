function db(imports){
	this.currentDb = undefined;
	this.objectDb = undefined;
	if(!imports){
		throw new Error('Missing imports or not included.');
	}else{
		this.imports = imports;
	}
}
//is only to configure db place
db.prototype.setDB = function(nameDB,url){
	if(!nameDB || nameDB === "config"){
		this.currentDb = {
			name: this.imports.init.config.database.db,
			urlDB: this.imports.init.config.database.url
		}
	}else if(nameDB && url){
		this.currentDb = {
			name: nameDB,
			urlDB: url
		}
	}
	switch(this.currentDb.name){
		case "JSON":
			const jsonDB = require(__dirname+'/jsondb/jsondb.js');
			this.objectDb = new jsonDB(this.currentDb.urlDB);
		break;
		default:
			throw new Error("idk xD");
	}
	
}
//is to connect to db
db.prototype.connect = function(login,password){
	if(!this.currentDb.name){
		throw new Error('You need first setDB.');
	}else{
		switch(this.currentDb.name){
			case "JSON":
				this.objectDb.connect();
			break;
			default:
				throw new Error("I cant connect to db. Cheack your db NAME");
		}
	}
}
module.exports = db;