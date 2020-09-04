({
  loadBoatTypes: function (component) {
    var action = component.get("c.getBoatTypes");
    action.setParams({});

    action.setCallback(this, function (response) {
      var state = response.getState();
      if (state == "SUCCESS") {
        component.set("v.boatTypes", response.getReturnValue());
      } else {
        console.log("Loading BoatTypes faile with state:" + state);
      }
    });
    $A.enqueueAction(action);
  }
});