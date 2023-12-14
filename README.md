# b2bstore
This project is built on top of the Sap Commerce Composible storefront using  library provide by SAP, below are the prerequisite

1. SAP Commerce Cloud 2211
2. Angular CLI (15.2.8)
3. Node.js
4. npm
5. Any IDE

## Backend Changes 
  1. Create an occ extension using yocc template 
  2. Expose rest API **/favourites** to return list of wish list object (Note : create multiple wishlist from backoffice and assign it to user)
  3. Once the backed setup is done New API can be accessed using the URL <IP>/occ/v2/<site_ID>/favourites
  4. create page template, content slots for new favourites page , refer URL for more details (https://help.sap.com/docs/SAP_COMMERCE_CLOUD_PUBLIC_CLOUD/e1391e5265574bfbb56ca4c0573ba1dc/ca0687d2796a44bb99ac59516ca87d20.html?locale=en-US)

## Frontend changes 
  1. create angular store and add spartacus schematics
  2. create custom component favourites (All the custom implementation is inside the folder "**favourites**" )

Below is the screenshot of favourites list component , data coming from SAP commerce cloud 

<img width="1111" alt="image" src="https://github.com/nishanhegde/b2bstore/assets/12079319/3a521274-ba37-4bd6-9faf-1e8c3c250993">
  
Development guide refer to below URL
(https://help.sap.com/docs/SAP_COMMERCE_COMPOSABLE_STOREFRONT/eaef8c61b6d9477daf75bff9ac1b7eb4/29f1576309744dfeb2e485aa226d0d26.html?locale=en-US)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


