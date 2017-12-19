$(function(){

    $("#image").on("click", function() {
        $(".images").show();
        $("#image").hide();

        $.ajax("/api/open", {
          type: "GET"
        }).then(
          function(data) {
            console.log("this worked", data);
            window.localStorage.setItem("box-contents", JSON.stringify(data))
            console.log(data.list);
          }
        );
    });

    $("#1").click(function(){
        var clickSound = new Audio("assets/sounds/arena.mp3");
        clickSound.play();
            
        var boxContents = window.localStorage.getItem("box-contents");
        var tier  = (JSON.parse(boxContents).list[0].tier); 
        var contentImage = JSON.parse(boxContents).list[0].image;
        console.log(contentImage); 

         $("#1").attr("src", contentImage); 
            if (tier === 4) {
                var point = 50; 
                //console.log(point);
            }
            else if (tier === 3) {
                var point = 20; 
                //console.log(point);
            }
            else if (tier === 2) {
                var point = 10; 
                //console.log(point);
            }
            else {
                var point = 2; 
                //console.log(point);
            }

        $.post("/", {token: window.localStorage.getItem("token")}).then(function(res){
            if(!res) {
                window.localStorage.clear();
                window.location.href = "/";
            } 
            else {
                //console.log(res); 
                var userName = res.user_name;
                var userPoints = res.points += point;
                //console.log(JSON.stringify(userName));
                //console.log(JSON.stringify(userPoints));

                $.ajax({
                    method: "PUT",
                    url: "/api/addPoints",
                    data: {
                        points: userPoints,
                        username: userName
                    }
                }).done(console.log("Points count Updated"));
             }
        })
    });

    $("#2").click(function(){
        var clickSound = new Audio("assets/sounds/arena.mp3");
        clickSound.play();
            
        var boxContents = window.localStorage.getItem("box-contents");
        var tier  = (JSON.parse(boxContents).list[1].tier); 
        var image = JSON.parse(boxContents).list[1].image;

        $("#2").attr("src", image); 
            if (tier === 4) {
                var point = 50; 
                //console.log(point);
            }
            else if (tier === 3) {
                var point = 20; 
                //console.log(point);
            }
            else if (tier === 2) {
                var point = 10; 
                //console.log(point);
            }
            else {
                var point = 2; 
                //console.log(point);
            }

            $.post("/", {token: window.localStorage.getItem("token")}).then(function(res){
                if(!res) {
                    window.localStorage.clear();
                    window.location.href = "/";
                } 
                else {
                    //console.log(res); 
                    var userName = res.user_name;
                    var userPoints = res.points += point;
                    //console.log(JSON.stringify(userName));
                    //console.log(JSON.stringify(userPoints));
    
                    $.ajax({
                        method: "PUT",
                        url: "/api/addPoints",
                        data: {
                            points: userPoints,
                            username: userName
                        }
                    }).done(console.log("Points count Updated"));
                 }
            })
        });

        $("#3").click(function(){
            var clickSound = new Audio("assets/sounds/arena.mp3");
            clickSound.play();
                
            var boxContents = window.localStorage.getItem("box-contents");
            var tier  = (JSON.parse(boxContents).list[2].tier); 
            var image = JSON.parse(boxContents).list[2].image;

            $("#3").attr("src", image); 
            if (tier === 4) {
                var point = 50; 
                //console.log(point);
            }
            else if (tier === 3) {
                var point = 20; 
                //console.log(point);
            }
            else if (tier === 2) {
                var point = 10; 
                //console.log(point);
            }
            else {
                var point = 2; 
                //console.log(point);
            }

        $.post("/", {token: window.localStorage.getItem("token")}).then(function(res){
            if(!res) {
                window.localStorage.clear();
                window.location.href = "/";
            } 
            else {
                //console.log(res); 
                var userName = res.user_name;
                var userPoints = res.points += point;
                //console.log(JSON.stringify(userName));
                //console.log(JSON.stringify(userPoints));
    
                $.ajax({
                    method: "PUT",
                    url: "/api/addPoints",
                        data: {
                            points: userPoints,
                            username: userName
                        }
                    }).done(console.log("Points count Updated"));
                 }
            })
        });

    });