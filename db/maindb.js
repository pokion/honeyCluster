function db(imports){
	this.currentDb = undefined;
	if(!imports){
		throw new Error('Missing imports or not included.');
	}else{
		this.imports = imports;
	}
}
//is only to rename
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
	
}
db.prototype.connect = function(login,password){
	switch(this.currentDb.name){
		case "JSON":
			
		break;
		default:
			throw new Error("I cant connect to db. Cheack your db NAME");
	}
}
module.exports = db;