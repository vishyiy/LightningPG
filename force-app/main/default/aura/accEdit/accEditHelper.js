({
  validateAccountForm: function(component) {
    // Show error messages if required fields are blank

    var inputCmp = component.find("accountField");

    inputCmp.showHelpMessageIfInvalid();
    return inputCmp.get("v.validity").valid;
  }
});