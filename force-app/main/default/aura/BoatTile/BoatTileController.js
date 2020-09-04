({
  doInit: function(component, event, helper) {
    var data = component.get("v.boat");
    console.log("data received in boattile>>>" + data);
  },
  onBoatClick: function(component, event, helper) {
    var boatId = component.get("v.boat.Id");
    var boat = component.get("v.boat");

    console.log("data received in BoatTile controller" + boat);
    var boatSelectedEvent = $A.get("e.c:BoatSelected");
    var boatSelectEvent = component.getEvent("boatSelect");
    var plotMarkerEvent = $A.get("e.c:PlotMapMarker");

    console.log("boatSelectedEvent>>>" + boatSelectedEvent);

    boatSelectEvent.setParams({
      boatId: boatId
    });
    boatSelectedEvent.setParams({
      boat: boat
    });

    plotMarkerEvent.setParams({
      sObjectId: boat.Id,
      lat: boat.Geolocation__Latitude__s,
      long: boat.Geolocation__Longitude__s,
      label: boat.Name
    });

    console.log("In BoatClick PlotMarkerEvt>>>" + plotMarkerEvent);

    boatSelectedEvent.fire();
    boatSelectEvent.fire();
    plotMarkerEvent.fire();
  }
});