({
  doInit: function (component, event, helper) {
    var action = component.get("c.getItems");
    action.setCallback(this, function (response) {
      var state = response.getState();
      if (state === "SUCCESS") {
        var items = component.get("v.items");
        items.push(response.getReturnValue());
        component.set("v.items", response.getReturnValue());
      }
    });
    $A.enqueueAction(action);
  },
  handleAddItem: function (component, event, helper) {
    var addItem = event.getParam("item");
    var action = component.get("c.saveItem");
    action.setParams({ item: addItem });

    action.setCallback(this, function (response) {
      var state = response.getState();
      if (state === "SUCCESS") {
        var items = component.get("v.items");
        items.push(response.getReturnValue());
        component.set("v.items", items);
      }
    });
    $A.enqueueAction(action);
  }
});