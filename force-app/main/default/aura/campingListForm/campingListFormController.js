({
  clickCreateItem: function(component, event, helper) {
    var validCampingItem = component
      .find("campingitemform")
      .reduce(function(validSoFar, inputCmp) {
        inputCmp.showHelpMessageIfInvalid();
        return validSoFar && inputCmp.get("v.validity").valid;
      }, true);

    if (validCampingItem) {
      var newItem = component.get("v.newItem");
      console.log("Create Camping Item: " + JSON.stringify(newItem));

      helper.createItem(component, newItem);
    }
  }
});