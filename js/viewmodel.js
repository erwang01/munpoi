function AppViewModel() {
    this.conferenceTitle = "Stanford Model United Nations Conference";
    this.pageTitle = this.conferenceTitle + " Points of Interests";
    this.enableDrawing = false;
    this.enableFood = true;
    this.enableTransit = false;
    this.enableBuildings = true;
    this.enableDriving = true;
    this.enableWalking = true;
    this.enableBiking = false;
    this.searchWithinTimeText = ko.observable("Ex: Dinkelspiel Auditorium");
    this.searchWithinTime = searchWithinTime;
    this.showPOIs = showListings;
    this.hidePOIs = function() {hideMarkers(markers);};
    //TODO: Figure out how to access Drawing manager
    //this.toggleDrawing = function() {toggleDrawing(drawingManager);};
    this.zoomToArea = zoomToArea;
    this.locations = ko.observableArray([
        {title: 'Tresidder Parking Lot', location: {lat: 37.423138, lng: -122.170927}, type: 0, marker: null},
        {title: 'Dinkelspiel Auditorium', location: {lat: 37.424052, lng: -122.170148}, type: 0, marker: null },
        {title: 'Panda Express', location: {lat: 37.424514, lng:-122.171127}, type: 1, marker: null},
        {title: 'Palm Drive', location: {lat: 37.429088, lng: -122.169715}, type: 0, marker: null},
        {title: 'Meeting Spot', location: {lat: 37.424115, lng: -122.170255}, type: 0, marker: null},
        {title: 'Old Union Fountain', location: {lat: 37.425062, lng: -122.169859}, type: 2, marker: null}
    ]);
    this.highlight= function(marker) {
        marker = marker.marker;
        marker.setIcon(vm.highlightedIcon);
    };
    this.reset = function(marker) {
        marker = marker.marker;
        marker.setIcon(vm.icons()[vm.locations()[marker.id].type]);
    };
    this.icons = ko.observableArray();
    this.highlightedIcon = null;
    this.filter = ko.observable("");
    this.filteredList = ko.computed(function() {
        var filter = this.filter().toLowerCase();
        if(!filter){
            return this. locations();
        } else {
            return ko.utils.arrayFilter(this.locations(), function(location) {
                return location.title.toLowerCase().indexOf(filter) !==-1;
            });
        }
    }, this);
}
var vm = new AppViewModel()
ko.applyBindings(vm);