let imports = require(__dirname+'/imports.js');
imports.init = new imports.init(imports);

if(imports.init.configStart()){
//starting all middleware and init express
	imports.app = imports.express();
	imports.init.startMiddleware(imports.app);

	const port = process.env.PORT || 5000;
	imports.app.listen(port, ()=> console.log(`server started on port ${port}`));

}else{
	throw new Error('Something goes super wrong :(');
}

