# Angular CRUD

	## precipitation
	
	1) node version 10.15.0
	
	2) To run this project need angular-cli version 7.1.4 or above.
	
	3) download or get clone of the project and then run command `npm install`.

	4) in this Json-server is used before to doing  `ng serve` firstly run `json-server --watch db.json` then do `ng serve` 
	
	5) in these google and facbook integration are do first you need to create client-id and include it in `app.module.ts` file [Google Documentation Integration](https://developers.google.com/identity/sign-in/web/sign-in) and [Facebook Documentation Integration](https://developers.facebook.com/docs)
	
	6) In these we use npm library for social integration `angularx-social-login` [link](https://www.npmjs.com/package/angularx-social-login).

	7) To know about [json-server](https://github.com/typicode/json-server).
	
	
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
