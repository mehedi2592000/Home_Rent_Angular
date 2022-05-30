

app.controller("login",function($scope,$http,$location){
    $scope.login=function(){
        //ajax.post("api/login",$scope.data,function(resp){},function(err){});
        $http.post("https://localhost:44377/api/Owner/Login",$scope.data)
        .then(function(resp){
            console.log(resp.data);
            //localStorage.setItem("token",resp.data.accessToken);
            //this.title="ok all right";
            localStorage.clear();
            localStorage.setItem("Id",resp.data.Id);
              
            //$location.path("/Dashboard");
        },function(err){
            console.log(err);
        });
    };
});
