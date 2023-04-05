module.exports = {
  searchField: "//input[@id='search']",
  Product: "//a[@class='product-item-link' and contains(text(),'productname')]",
  color: "#option-label-color-93-item-ID",
  size: "#option-label-size-143-item-NUM",
  quantity_field: "#qty",
  addCartButton: "#product-addtocart-button",
  updateCartButton: "#product-updatecart-button",
  checkoutButton: "//span[contains(text(),'Proceed to Checkout')]",
  email: "#customer-email-fieldset > .required > .control > #customer-email",
  state: "//select[@name='region_id']",
  country: "//select[@name='country_id']",
  firstName: "//input[@name='firstname']",
  lastName: "//input[@name='lastname']",
  adress: "//input[@name='street[0]']",
  city: "//input[@name='city']",
  postalCode: "//input[@name='postcode']",
  phoneNumber: "//input[@name='telephone']",
  nextButton: "//span[contains(text(),'Next')]",
  price: "strong > .price",
  logo: ".logo > img",
  editButton:
    ":nth-child(3) > .item-actions > td > .actions-toolbar > .action-edit",
};