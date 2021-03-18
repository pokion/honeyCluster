const defaultConfig = {
		login: "root",
		password: "pass",
		database: {
			db: "JSON",
			url: "/"
		},
		firstStart: true
	};

function Init(imports){
	this.config;
	if(!imports){
		throw new Error('Missing imports or not included.');
	}else{
		this.imports = imports;
	}
}
//prepare to start machine and read the config file
Init.prototype.configStart = function(){
	this.config = new this.imports.JSONdb(__dirname+'/config.json');

	switch(this.config.get("firstStart")){
		case undefined:
			this.config.set(this.config.JSON(defaultConfig));
			this.config.sync();
			console.log('Default config is created.');
			return true;
			break;
		default:
			return true;
	}
}
Init.prototype.startMiddleware = function(app){
	app.use(this.imports.bodyParser.json());
	app.use(this.imports.cookie());
	app.use(this.imports.express.static('public'));
	app.use(this.imports.bodyParser.urlencoded({ extended: true }));
}
module.exports = Init;