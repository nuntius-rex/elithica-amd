// This requirejs module component
define(['knockout'], function(ko) {
    return function navBarViewModel() {
        console.log("Main NavBar loaded!");
        this.title=ko.observable(appConfig.title+' - '+appConfig.version);
        this.rdir=ko.observable("/"+appConfig.rdir+"/");
        this.home=ko.observable("/");


    };
});
