({
  refreshBoatReviews: function (component) {
    var boatreviewscomp = component.find("boatreviewscomp");
    if (boatreviewscomp) {
      boatreviewscomp.refresh();
    }
  }
});