let imports = require(__dirname+'/imports.js');
imports.app = imports.express();
imports.init = new imports.init(imports);


//starting machine
const port = process.env.PORT || 5000;
imports.app.listen(port, ()=> console.log(`server started on port ${port}`));
