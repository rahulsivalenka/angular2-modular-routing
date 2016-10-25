# Angular 2 - Routing with multiple modules

### Node versions used
* node - v6.5.0
* npm - 3.10.3

### Run the app
* Run `npm install` in the project directory. **# only for first run**
* Run `npm start` to start the application in watch mode.

### Project directory structure
```
  Project Directory
  |   index.html
  |   package.json
  |   ReadMe.md
  |   styles.css
  |   systemjs.config.js
  |   tsconfig.json
  |   typings.json
  |   
  +---app
  |   |   app.component.ts
  |   |   app.module.ts
  |   |   main.ts
  |   |   
  |   +---module1
  |   |       module1-page1.component.ts
  |   |       module1-page2.component.ts
  |   |       module1.component.ts
  |   |       module1.module.ts
  |   |       
  |   \---module2
  |           module2-page1.component.ts
  |           module2-page2.component.ts
  |           module2.component.ts
  |           module2.module.ts
  |           
  +---dist ... # Created upon running 'npm start'
  |           
  +---node_modules ... # Created upon running 'npm install'
  |                   
  \---typings ... # Created upon running 'npm install'
```        

### Configuration files needed

* **package.json** identifies npm package dependencies for the project.
* **tsconfig.json** defines how the TypeScript compiler generates JavaScript from the project's files.
* **typings.json** provides additional definition files for libraries that the TypeScript compiler doesn't natively recognize.
* **systemjs.config.js** provides information to a module loader about where to find application modules, and registers all the necessary packages. It also contains other packages that will be needed by later documentation examples.

### References
* [Angular 2 Quickstart](https://angular.io/docs/ts/latest/quickstart.html)
* [Angular 2 Routing and Navigation](https://angular.io/docs/ts/latest/guide/router.html)
* [Angular 2 Tour of Heroes Tutorial](https://angular.io/docs/ts/latest/tutorial/)