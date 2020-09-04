({
  onInit: function (component) {
    var boatId = component.get("v.boat").Id;
    var action = component.get("c.getAll");
    action.setParams({
      boatId: boatId
    });

    action.setCallback(this, function (response) {
      var state = response.getState();
      if (state == "SUCCESS") {
        component.set("v.boatReviews", response.getReturnValue());
        console.log("BoatReviews init is success");
      } else {
        console.log("Loading BoatReviews failed with state:" + state);
      }
    });
    $A.enqueueAction(action);
  }
});