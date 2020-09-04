({
  onInit: function(component) {
    component.find("service").getNewRecord(
      "BoatReview__c",
      null,
      false,
      $A.getCallback(function() {
        var rec = component.get("v.simpleBoatReview");
        var error = component.get("v.recordError");
        if (error || rec === null) {
          console.log("Error initializing record template: " + error);
          return;
        }
      })
    );
  }
});