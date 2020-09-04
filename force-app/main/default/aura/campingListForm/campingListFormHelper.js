({
  createItem: function (component, item) {
    var addItemEvent = component.getEvent("addItem");
    addItemEvent.setParams({ item: item });
    addItemEvent.fire();

    component.set("v.newItem", {
      sobjectType: "Camping_Item__c",
      Name: "",
      Price__c: 0,
      Quantity__c: 0,
      Packed__c: false
    });
  }
});