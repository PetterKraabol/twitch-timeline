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

    // Default settings
    $scope.videoType = 'broadcasts';

    // Video type
    $scope.changeType = function(type) {
        $scope.videoType = type == 'broadcasts' ? 'broadcasts' : 'highlights';
    }

    // Highlights
    Timeline.highlights(function(highlights) {
        console.log(highlights.videos);
        $scope.highlights = highlights.videos;
    });

}]);