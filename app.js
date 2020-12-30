(function() {
  angular.module('myapp',[])
  .controller('myController',function($scope){
$scope.AddItem=function(){

  var items = $scope.lunchitem.split(',');
  if(items.length<=3)
  {
    $scope.Message="Enjoy!";
  }
  else {
    {
      $scope.Message="Too much!";
    }
  }
};
  }

);
})();
