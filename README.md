# GlobalMedia-AutomationTask

# Overview
 I selected Cypress, especially because it supports not only UI tests but also API checks.
 Cypress is a JavaScript end-to-end testing framework that allows  to write and run tests for your web applications in an easy and intuitive way. It is built on top of the Mocha testing framework and uses Chai for assertions.
 I tried to do as much dynamic testing as I could, using fakerlibraries to make tests not dependent on specific data. Also, I think that the Page Object Model pattern is the best pattern in my case, so I chose to separate elements and functions. The page object model is more common than Selenium, but I think it's a very good option also in Cypress.



https://user-images.githubusercontent.com/78497060/230228011-3cf65d32-c22d-426a-b03f-56f0d415e24b.mp4



## Setup

##### Install Node & npm .
##### Install Visual Studio Code .
##### Install Cypress.
##### Install Faker Check [here](https://www.npmjs.com/package/@faker-js/faker).
##### Install cypress xpath Check [here](https://www.npmjs.com/package/@cypress/xpath).
##### You can install all dependencies using :
```
npm install 
```
##### You can run cypress using :
```
npx cypress open
```

## Structure:

### `Pages`
<img width="253" alt="Screen Shot 2023-04-05 at 11 52 53 PM" src="https://user-images.githubusercontent.com/78497060/230229414-206de6a6-44ff-4edd-b9ad-3a3a3a60c1f0.png">
###### contains elements , page functions .

### `Tests`
###### contains tests for buying new products.

## how to deal with cookies 
To deal with cookies issues i added in `Index` and after each test case we clear all cookies.
```
<img width="253" alt="Screen Shot 2023-04-05 at 11 51 55 PM" src="https://user-images.githubusercontent.com/78497060/230229054-97253a3e-7662-42fa-b4f5-dd95876bb400.png">
afterEach(() => {
    //Code to Handle the Sesssions in cypress.
    //Keep the Session alive when you jump to another test
    let str = [];
    cy.getCookies().then((cook) => {
        cy.log(cook);
        for (let l = 0; l < cook.length; l++) {
            if (cook.length > 0 && l == 0) {
                str[l] = cook[l].name;
                Cypress.Cookies.preserveOnce(str[l]);
            } else if (cook.length > 1 && l > 1) {
                str[l] = cook[l].name;
                Cypress.Cookies.preserveOnce(str[l]);
            }
        }
    })
})
```

## Notes :

###### `Faker and Moment libaries  used for creation random test data.`
###### `Cypress-Xpath used for adding strong selectors.`
###### `I found that The total amount of the products at the end is $140.00. `
###### `I found that The cart Icon is loading for long time and in some cases i need to go by link to checkout page not by clicking on cart Icon. `
###### `I found that there some latency in adding products to cart. `



<div id="badges">
  <a href="https://www.linkedin.com/in/sara-nagy-elzahry/">
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
</div>
<div id="header" align="center">
  <img src="https://media.giphy.com/media/M9gbBd9nbDrOTu1Mqx/giphy.gif" width="100"/>
</div>
