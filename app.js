let imports = require(__dirname+'/imports.js');
imports.init = new imports.init(imports);

if(imports.init.configStart()){
//starting all middleware and init express
	imports.app = imports.express();
	imports.init.startMiddleware(imports.app);
	imports.db = new imports.db(imports);
	imports.db.connect();

	const port = process.env.PORT || 5000;
	imports.app.listen(port, ()=> console.log(`server started on port ${port}`));
	console.log(imports.init.config)

}else{
	throw new Error('Something goes super wrong :(');
}

