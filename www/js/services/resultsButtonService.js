angular.module('TKresultsButton', [])
.service('TKresultsButtonService', function()
{
    var service = this;
    var shouldShowButton = false;
   
    service.setShouldShowMenuButton = function(show)
    {
        shouldShowButton = show;
    };
   
    service.getShouldShowMenuButton = function()
    {
        return shouldShowButton;
    };
});