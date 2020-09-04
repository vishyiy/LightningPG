({
  doInit: function(component, event, helper) {
    var isEnabled = $A.get("e.force:navigateToSObject");
    if (isEnabled) {
      component.set("v.displayFullDetails", true);
    }
  },
  onFullDetails: function(component, event, helper) {
    var navEvt = $A.get("e.force:navigateToSObject");
    var boat = component.get("v.boat");

    if (boat) {
      navEvt.setParams({
        recordId: boat.Id,
        slideDevName: "detail"
      });
      navEvt.fire();
    }
  }
});