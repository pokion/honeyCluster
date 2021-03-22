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
	this.config = new imports.JSONdb(__dirname+'/config.json');

	if(this.config.get("firstStart") === undefined){
		this.config.set(this.config.JSON(defaultConfig));
		this.config.sync();
		console.log('Default config is created.');
	}else{
		this.config.sync();
		console.log('Config is sync.');
	}
	//starting alla middleware
	imports.app.use(imports.bodyParser.json());
	imports.app.use(imports.cookie());
	imports.app.use(imports.express.static('public'));
	imports.app.use(imports.bodyParser.urlencoded({ extended: true }));
}
module.exports = Init;