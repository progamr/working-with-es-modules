# WorkingWithModules
This Repository is for the Working with JavaScript Modules Pluralsight course. 
# Run the demo app
`npm i`
`npm start`
——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
- ES 6 Modules intro:
- IIFE: immediately invoked function expression: is used to encapsulate some js code but it is not the most clean way to protect data 
From the global scope.
- What are ES6 modules: they are a built in way of encapsulating, partitioning and managing access to code in js.
-	Some useful things about scopes: 
	- Encapsulate code so it is not shared with the global scope.
	- Control access to code so it prevents global access to all the code rather the developer gives access to only pieces that
	other can use.
	- Reference it’s own dependencies allowing us to prevent global import for that dependency.
- Considerations:
	- Modules are singletons meaning that when you export a module everything that imports that module get’s the same instance of it.
	- Properties  are bound so if we changed some value somewhere it is changed every where in the code.
	- Exports are static meaning once a module is loaded the things exported out of it stays how it is.
	- Because modules are file based you have to have one module exported per file.

——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
-	Creating Modules:
	- there is 3 ways to export modules in SE6.
	-	Named export:- Is exporting modules to the outer world with exact names then importing the with that exact same name.
	- EX:
function getSessions(){
    return new Promise(function(resolve, reject){
        var oReq = new XMLHttpRequest();
        oReq.onload = function (e) {
            sessionsList = e.target.response;
            resolve(sessionsList);
        };
        oReq.open('GET', url, true);
        oReq.responseType = 'json';
        oReq.send();
    })
}

export {
    getSessions
}


	-	We can rename exported module while exporting them using (export {sessionObject as session}).

	- Default exports allows you to export modules and import them without worrying about their names.
	- Keep in mind that you can have only one default export in a js module.
	EX:
export default sessionsList;

	- OR

export {
    getSessions as default
}
	
	- named export from other files: This is useful when you want to export a group of modules from one file for more organizing the code.
	so we do this by

export {
    getSessions
}
export {sessionTemplate} from './template';


-	Using Modules:
	- To start using modules for a standard js env we must use the type=“module” for js files that intended to be modules.
	-	Default imports: Enable importing default exported modules without caring about their actual names.
	- Ex:
import getSessions from './sessionRepo';

	- Named import allows you to import modules with exact names and also gives you the option to rename them if needed.
	- Ex:
import {sessionTemplate as template} from './sessionRepo.js';
	- You can also have mix between named and default import for a js module.
	- EX:
	
import getSessions, {sessionTemplate as template} from './sessionRepo.js';

	- Basically here we are importing default export which is getSessions and also sessionTemplate and renaming it at the same time.
	- Also we can import all the named modules with * syntax to group them under one umbrella
	-	Ex:
import getSessions, * as template from './sessionRepo.js';

