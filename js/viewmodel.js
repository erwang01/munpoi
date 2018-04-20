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
}
var vm = new AppViewModel()
ko.applyBindings(vm);