({
  handleSaveAccount: function(component, event, helper) {
    if (helper.validateAccountForm(component)) {
      var errMsg = "";

      component.find("recordHandler").saveRecord(
        $A.getCallback(function(saveResult) {
          if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
            //record is saved successfully
            var resultsToast = $A.get("e.force:showToast");
            resultsToast.setParams({
              title: "Saved",
              message: "The record was saved."
            });
            resultsToast.fire();
          } else if (saveResult.state === "INCOMPLETE") {
            // handle the incomplete state
            component.set(
              "v.recordSaveError",
              "User is offline, device doesn't support drafts."
            );
          } else if (saveResult.state === "ERROR") {
            // handle the error state
            for (var i = 0; i < saveResult.error.length; i++) {
              errMsg += saveResult.error[i].message + "\n";
            }
            component.set("v.recordSaveError", errMsg);

            component.set(
              "v.recordError",
              "Problem saving contact, error: " +
                JSON.stringify(saveResult.error)
            );
          } else {
            component.set(
              "v.recordSaveError",
              "Unknown problem, state: " +
                saveResult.state +
                ", error: " +
                JSON.stringify(saveResult.error)
            );
          }
        })
      );
    }
  }
});