/*
|--------------------------------------------------------------------------
| Timeline Controller
|--------------------------------------------------------------------------
|
| Main controller for the Twitch Timeline application.
|
|
|
*/
app.controller('TimelineController', ['$scope', 'Timeline', function($scope, Timeline) {

    Timeline.highlights(function(highlights) {
        console.log(highlights.videos);
        $scope.highlights = highlights.videos;
    });

}]);