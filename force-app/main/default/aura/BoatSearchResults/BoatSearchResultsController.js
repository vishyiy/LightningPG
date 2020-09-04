({
  doSearch: function (component, event, helper) {
    console.log("BoatSearchResultsCmp in doSearch");
    var params = event.getParam("arguments");
    if (params) {
      var param1 = params.param1;
      component.set("v.boatTypeId", param1);
      helper.onSearch(component);
    }
  },
  doInit: function (component, event, helper) {
    console.log("BoatSearchResultsCmp in doInit");
    helper.onSearch(component);
  },
  onBoatSelect: function (component, event, helper) {
    var selectedBoatId = event.getParam("boatId");
    component.set("v.selectedBoatId", selectedBoatId);
    console.log("Selected BoatTypeId in Event Handler>>>" + selectedBoatId);
  }
});