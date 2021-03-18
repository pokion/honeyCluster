function jsonDB(path){
	this.path = path;
	this.schema = new this.imports.JSONdb(__dirname+'/jsondb/schema.json');
}