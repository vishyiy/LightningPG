({
  doInit: function (component, event, helper) {
    helper.onInit(component);
  },
  onSave: function (component, event, helper) {
    var tempRec = component.find("service");
    var boatReviewAddedEvent = component.getEvent("boatReviewAdded");
    tempRec.saveRecord(
      $A.getCallback(function (result) {
        console.log(result.state);
        var resultsToast = $A.get("e.force:showToast");
        if (result.state === "SUCCESS") {
          if (resultsToast) {
            resultsToast.setParams({
              title: "Saved",
              message: "The record was saved."
            });
            resultsToast.fire();
          } else {
            alert("The reocrd was saved");
          }

          boatReviewAddedEvent.fire();
          helper.onInit(component);
        } else if (result.state === "ERROR") {
          console.log("Error: " + JSON.stringify(result.error));
          resultsToast.setParams({
            title: "Error",
            message:
              "There was an error saving the record: " +
              JSON.stringify(result.error)
          });
          resultsToast.fire();
        } else {
          console.log(
            "Unknown problem, state: " +
              result.state +
              ", error: " +
              JSON.stringify(result.error)
          );
        }
      })
    );
  },
  onRecordUpdated: function (component, event, helper) {}
});