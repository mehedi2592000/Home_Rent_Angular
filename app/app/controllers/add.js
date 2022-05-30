
app.controller("add",function($scope,$http,$location){
    $scope.login=function(){
        //ajax.post("api/login",$scope.data,function(resp){},function(err){});
        var p=parseInt(localStorage.getItem("Id"));

        //$http.post("https://localhost:44377/api/Caretaker/Add/"+1,$scope.data)
        $http.post("https://localhost:44377/api/Caretaker/Add/"+p,$scope.data)
        .then(function(resp){
            console.log(resp.data);
            
        },function(err){
            console.log(err);
        });
    };
});
