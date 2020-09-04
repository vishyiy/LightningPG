({
  onBoatSelected: function (component, event, helper) {
    var boat = event.getParam("boat");
    console.log("BoatSelected AppEvt>>" + boat);
    component.set("v.id", boat.Id);
    component.find("service").reloadRecord();
  },
  onBoatReviewAdded: function (component, event, helper) {
    console.log("Entered onBoatReviewAdded event handler");
    component.set("v.selectedTabId", "boatreviewtab");
    helper.refreshBoatReviews(component);
  },
  recordUpdated: function (component, event, helper) {
    helper.refreshBoatReviews(component);
  }
});