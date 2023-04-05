import { faker } from "@faker-js/faker";
var elements = require("./elements");

export default class LUMAPage {
  //This function for searching for any product
  searchForProduct(productName) {
    cy.xpath(elements.searchField).clear();
    cy.xpath(elements.searchField).type(productName).type("{enter}");
    cy.xpath(elements.Product.replace("productname", productName)).click();
  }
  //This function for add products to cart or update products selection
  selectProduct(quantity, size, color, process) {
    if (size == "meduim") {
      cy.get(elements.size.replace("NUM", 168)).click({ force: true });
    }
    if (size == "small") {
      cy.get(elements.size.replace("NUM", 167)).click({ force: true });
    }
    if (color == "green") {
      cy.get(elements.color.replace("ID", 53)).click({ force: true });
    }
    if (color == "yellow") {
      cy.get(elements.color.replace("ID", 60)).click({ force: true });
    }

    cy.get(elements.quantity_field).clear();
    cy.get(elements.quantity_field).type(quantity);
    cy.wait(500).then(() => {
      if (process == "addtocart") {
        cy.get(elements.addCartButton).click({ force: true });
      }
      if (process == "updatecart") {
        cy.get(elements.updateCartButton).click({ force: true });
      }
    });
  }
  //this function for opening cart i used way to go to cart by URL not clicking on Icon cause icon keed loading for long time
  openCart() {
    cy.wait(4000).then(() => {
      cy.visit(`${Cypress.config("baseUrl")}/checkout/cart/`);
    });
    cy.wait(4000);
    cy.xpath(elements.checkoutButton).click({ force: true });
  }
  //this function for update cart
  editcart() {
    cy.wait(1000).then(() => {
      cy.visit(`${Cypress.config("baseUrl")}/checkout/cart/`);
    });
    cy.wait(1000);
    cy.get(elements.editButton).click({ force: true });
    cy.wait(2000).then(() => {
      this.selectProduct(3, " ", " ", "updatecart");
    });
    cy.wait(1000).then(() => {
      cy.xpath(elements.checkoutButton).click({ force: true });
    });
  }
  // this function for add all shipments details
  addShipping() {
    // use faker to generate below data
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let adress = faker.address.secondaryAddress();
    let city = faker.address.cityName();
    let postalCode = faker.address.zipCode();
    let phoneNumber = faker.phone.phoneNumber();
    let Email = faker.internet.email();

    //wait for page loading
    cy.wait(4000).then(() => {
      cy.get(elements.email).type(Email);
      cy.xpath(elements.firstName).type(firstName);
      cy.xpath(elements.lastName).type(lastName);
      cy.xpath(elements.adress).type(adress);
      cy.xpath(elements.city).type(city);
      cy.xpath(elements.postalCode).type(postalCode);
      cy.xpath(elements.phoneNumber).type(phoneNumber);
      cy.xpath(elements.state).select("2");
      cy.xpath(elements.country).select("GB");
      cy.wait(2000);
      cy.xpath(elements.nextButton).dblclick();
    });
  }
  //this function for checking total price
  checkPrice(price) {
    cy.get(elements.price).then(($el) => {
      expect($el.text()).include(price);
    });
    cy.get(elements.logo).click();
  }
}
