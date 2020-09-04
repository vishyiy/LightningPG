({
  doInit: function (component, event, helper) {
    helper.loadBoatTypes(component);
    var selectedBoatType = component.get("v.selectedBoatType");
    console.log("Selected Boat Type in init" + selectedBoatType);

    var isEnabled = $A.get("e.force:createRecord");
    if (isEnabled) {
      component.set("v.isNewButtonAvailable", true);
    }
  },
  onSelectTypeChange: function (component, event, helper) {
    component.set(
      "v.selectedBoatType",
      component.find("selectType").get("v.value")
    );
  },
  createNewBoatRecord: function (component, event, helper) {
    var createBoatEvent = $A.get("e.force:createRecord");
    createBoatEvent.setParams({
      entityApiName: "Boat__c",
      defaultFieldValues: {
        BoatType__c: component.get("v.selectedBoatType")
      }
    });
    createBoatEvent.fire();
  },
  onFormSubmit: function (component, event, helper) {
    var formSubmitEvent = component.getEvent("formsubmit");
    var selectedBoatType = component.get("v.selectedBoatType");
    console.log("SelectedBoatType>>>" + selectedBoatType);

    var data = {
      boatTypeId: selectedBoatType
    };

    formSubmitEvent.setParams({
      formData: data
    });
    formSubmitEvent.fire();
  }
});