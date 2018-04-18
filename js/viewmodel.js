function AppViewModel() {
    this.conferenceTitle = "Stanford Model United Nations Conference";
    this.pageTitle = this.conferenceTitle + " Points of Interests";
}

ko.applyBindings(new AppViewModel());