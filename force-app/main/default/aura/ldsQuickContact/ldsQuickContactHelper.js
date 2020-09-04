({
    validateContactForm: function(component) {
        // Show error messages if required fields are blank
        var allValid = component.find("contactField").reduce(function (validSoFar, inputCmp) {
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        
        return(allValid);
        
    }  
    
})