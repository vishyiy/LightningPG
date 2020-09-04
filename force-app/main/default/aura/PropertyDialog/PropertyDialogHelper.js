({
  navigateTo: function(component) {
    var recId = component.get("v.recordId");
    var navEvt = $A.get("e.force:navigateToSObject");
    navEvt.setParams({
      recordId: recId
    });
    navEvt.fire();
  }
});