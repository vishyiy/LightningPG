({
  onFormSubmit: function (component, event, helper) {
    var formData = event.getParam("formData");
    var boatSearchResultCmp = component.find("boatSearchResultsCmp");
    if (boatSearchResultCmp) {
      console.log("event handler param>>>" + formData);
      boatSearchResultCmp.search(formData.boatTypeId);
    }
  }
});