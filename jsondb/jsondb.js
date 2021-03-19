function jsonDB(path){
	this.path = path || '/';
	this.schema;
}
jsonDB.prototype.connect = function(){
	this.schema = new this.imports.JSONdb(__dirname+this.path);
	console.log('schema json is connected');
}
module.exports = jsonDB;