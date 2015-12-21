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
    $scope.videoType = 'highlights';

    // Video type
    $scope.changeType = function(type) {
        $scope.videoType = type == 'broadcasts' ? 'broadcasts' : 'highlights';
    }

    // Highlights
    Timeline.highlights(function(highlights) {
        console.log(' ');
        console.log('Sorted and layered');
        highlights.forEach(function(layer) {
            console.table(layer, ['title', 'recorded_at', 'ended_at']);
        });
    });

}]);