$(function(){

    //TREASURE CHEST IMAGE CLICK//
    $("#image").on("click", function() {
        //sound effect for chest opening
        var clickSound = new Audio("assets/sounds/chest.mp3");
        clickSound.volume = 0.1;
        clickSound.play();

        //Delay effect for picture change 
        setTimeout (function(){
            $(".images").show();
            $("#image").hide();
        }, 2000);

        //Get user indentity key from local storage 
        var identity = window.localStorage.getItem("token");

        //Ajax call to get 3 randomly generated images, set to local storage as "box-contents"
        $.ajax("/api/open/"+identity, {
          type: "GET"
        }).then(function(data) {
            window.localStorage.setItem("box-contents", JSON.stringify(data));

            $.post("/", {token: window.localStorage.getItem("token")}).then(function(res){
                if(!res) {
                    window.localStorage.clear();
                    window.location.href = "/";
                } else {
                    //create variable with data from local storage token to fill coin count div and subtract coins for chest purchase
                    var username = res.user_name;
                    var coin = parseInt(res.coin_count) - parseInt(50);
                    $("#coinCountFill").html("<p> Coins: "+ coin +"</p>");
                    //Ajax call to update data-base with new coin value
                    $.ajax({
                        method: "PUT",
                        url: "/api/updateCoin",
                        data: {
                            coin: coin,
                            username: username
                        }
                    }).done(console.log());
                }//else
            })//post
        });//ajax
    });//End #image click function

    //FIRST QUESTION MARK IMAGE CLICK
    $("#1").click(function(){
        //Create 4 sound variable to assign to tier results, lower volume
        var clickSound = new Audio("assets/sounds/arena.mp3");
        var clickSoundLegendary = new Audio("assets/sounds/legendary.mp3");
        var clickSoundEpic = new Audio("assets/sounds/epic.mp3");
        var clickSoundRare = new Audio("assets/sounds/rare.mp3");
        clickSound.volume = 0.1;
        clickSoundLegendary.volume = 0.5;
        clickSoundEpic.volume = 0.5;
        clickSoundRare.volume = 0.5;

        //Get 3 user-new items from local storage and store image and tier as variables
        var boxContents = window.localStorage.getItem("box-contents");
        var tier  = JSON.parse(boxContents).list[0].tier;
        var contentImage = JSON.parse(boxContents).list[0].image;
      
        //Send new image 1 to handlebars to replace question mark
         $("#1").attr("src", contentImage);
            //Assign point values to specific tiers and call specific sound effect
            if (tier === 4) {
                var point = 50;
                clickSoundLegendary.play();
                clickSound.play();
            }
            else if (tier === 3) {
                var point = 20;
                clickSoundEpic.play();
                clickSound.play();
            }
            else if (tier === 2) {
                var point = 5;
                clickSoundRare.play();
                clickSound.play();
            }
            else {
                clickSound.play();
                var point = 1;
            }

            //Get identity key from local storage and make ajax call to get user info so we can update user points from opening chect
            $.post("/", {token: window.localStorage.getItem("token")}).then(function(res){
                if(!res) {
                    window.localStorage.clear();
                    window.location.href = "/";
                }
                else {
                    //Add new point value to current point count 
                    var userPoints = parseInt(res.points) + parseInt(point);
                    var userName = res.user_name;
                    //Ajax call to update database
                    $.ajax({
                        method: "PUT",
                        url: "/api/addPoints",
                        data: {
                            points: userPoints,
                            username: userName
                        }
                    }).done();
                }//else
            })//post
    });//End FIRST QUESTION MARK click function


    //SECOND QUESTION MARK IMAGE CLICK
    $("#2").click(function(){
        disabled = true;
        //Create 4 sound variable to assign to tier results, lower volume
        var clickSound = new Audio("assets/sounds/arena.mp3");
        var clickSoundLegendary = new Audio("assets/sounds/legendary.mp3");
        var clickSoundEpic = new Audio("assets/sounds/epic.mp3");
        var clickSoundRare = new Audio("assets/sounds/rare.mp3");
        clickSound.volume = 0.1;
        clickSoundLegendary.volume = 0.5;
        clickSoundEpic.volume = 0.5;
        clickSoundRare.volume = 0.5;

        //Get 3 user-new items from local storage and store image and tier as variables
        var boxContents = window.localStorage.getItem("box-contents");
        var tier  = JSON.parse(boxContents).list[1].tier;
        var contentImage = JSON.parse(boxContents).list[1].image;
      
        //Send new image 1 to handlebars to replace question mark
         $("#2").attr("src", contentImage);
            //Assign point values to specific tiers and call specific sound effect
            if (tier === 4) {
                var point = 50;
                clickSoundLegendary.play();
                clickSound.play();
            }
            else if (tier === 3) {
                var point = 20;
                clickSoundEpic.play();
                clickSound.play();
            }
            else if (tier === 2) {
                var point = 5;
                clickSoundRare.play();
                clickSound.play();
            }
            else {
                clickSound.play();
                var point = 1;
            }

            //Get identity key from local storage and make ajax call to get user info so we can update user points from opening chect
            $.post("/", {token: window.localStorage.getItem("token")}).then(function(res){
                if(!res) {
                    window.localStorage.clear();
                    window.location.href = "/";
                }
                else {
                    //Add new point value to current point count 
                    var userPoints = parseInt(res.points) + parseInt(point);
                    var userName = res.user_name;
                    //Ajax call to update database
                    $.ajax({
                        method: "PUT",
                        url: "/api/addPoints",
                        data: {
                            points: userPoints,
                            username: userName
                        }
                    }).done();
                }//else
            })//post
    });//End SECOND QUESTION MARK click function
    
    //THIRD QUESTION MARK IMAGE CLICK
    $("#3").click(function(){
        //Create 4 sound variable to assign to tier results, lower volume
        var clickSound = new Audio("assets/sounds/arena.mp3");
        var clickSoundLegendary = new Audio("assets/sounds/legendary.mp3");
        var clickSoundEpic = new Audio("assets/sounds/epic.mp3");
        var clickSoundRare = new Audio("assets/sounds/rare.mp3");
        clickSound.volume = 0.1;
        clickSoundLegendary.volume = 0.5;
        clickSoundEpic.volume = 0.5;
        clickSoundRare.volume = 0.5;

        //Get 3 user-new items from local storage and store image and tier as variables
        var boxContents = window.localStorage.getItem("box-contents");
        var tier  = JSON.parse(boxContents).list[2].tier;
        var contentImage = JSON.parse(boxContents).list[2].image;
      
        //Send new image 1 to handlebars to replace question mark
         $("#3").attr("src", contentImage);
            //Assign point values to specific tiers and call specific sound effect
            if (tier === 4) {
                var point = 50;
                clickSoundLegendary.play();
                clickSound.play();
            }
            else if (tier === 3) {
                var point = 20;
                clickSoundEpic.play();
                clickSound.play();
            }
            else if (tier === 2) {
                var point = 5;
                clickSoundRare.play();
                clickSound.play();
            }
            else {
                clickSound.play();
                var point = 1;
            }

            //Get identity key from local storage and make ajax call to get user info so we can update user points from opening chect
            $.post("/", {token: window.localStorage.getItem("token")}).then(function(res){
                if(!res) {
                    window.localStorage.clear();
                    window.location.href = "/";
                }
                else {
                    //Add new point value to current point count 
                    var userPoints = parseInt(res.points) + parseInt(point);
                    var userName = res.user_name;
                    //Ajax call to update database
                    $.ajax({
                        method: "PUT",
                        url: "/api/addPoints",
                        data: {
                            points: userPoints,
                            username: userName
                        }
                    }).done();
                }//else
            })//post
    });//End THIRD QUESTION MARK click function

});//End page function
