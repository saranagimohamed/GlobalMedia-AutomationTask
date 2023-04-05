import LUMAPage from "../Pages/LUMA/LUMAPage";
const lumaPage = new LUMAPage();
describe("Tests for the complete buying process for the products.", () => {
  it("Verify that user can search for Product(Gwyn Endurance Tee) and find it successfully. ", () => {
    lumaPage.searchForProduct("Gwyn Endurance Tee");
  });
  it("Verify that user can add 4 Products(Gwyn Endurance Tee) to the cart", () => {
    lumaPage.selectProduct("4", "meduim", "green", "addtocart");
  });

  it("Verify that user can shipping details successfully. ", () => {
    lumaPage.openCart();
    lumaPage.addShipping();
  });
  it("Verify that cart total is $92.00 ", () => {
    lumaPage.checkPrice("$92.00");
  });
  it("Verify that user can add Product(Gwyn Endurance Tee) and find it successfully. ", () => {
    lumaPage.searchForProduct("Gwyn Endurance");
    lumaPage.selectProduct("1", "small", "yellow", "addtocart");
  });
  it("Verify that user can add Product(Quest Lumaflex™ Band) and find it successfully. ", () => {
    lumaPage.searchForProduct("Quest Lumaflex™ Band");
    lumaPage.selectProduct("1", "", "", "addtocart");
  });
  it("Verify that user can Update the Quantity of Gwyn Endurance Tee ", () => {
    lumaPage.editcart();
  });
  it("Verify that cart total is $140.00", () => {
    lumaPage.addShipping();
    lumaPage.checkPrice("$140.00");
  });
  after("", () => {
    cy.clearCookies();
  });
});
