(function() {
  angular.module('myapp',[])
  .controller('myController',function($scope){
$scope.AddItem=function(){
if($scope.lunchitem=="")
{
  alert("Please Please enter data first");
  return;
}
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
