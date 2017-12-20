$(function(){

    $("#leaderboard").click(async function(){

      $("#slide-out").empty();
        await $.ajax("/api/leaderboard", {
            type: "GET"
        }).then(
            function(data) {
                //console.log("this worked", data);
                window.localStorage.setItem("leader-contents", JSON.stringify(data))
                //console.log(data.leaders);
            });

        var leaderContents = window.localStorage.getItem("leader-contents");

        for (i = 0; i < 10; i++) {
            var points = JSON.parse(leaderContents).leaders[0].points;
            var username  = JSON.parse(leaderContents).leaders[0].user_name;
            console.log(JSON.parse(leaderContents).leaders[i].points);
            console.log(JSON.parse(leaderContents).leaders[i].user_name);
            console.log("Points: " + points);
            console.log("Username: " + username);
            //console.log("<li><h5>"+ JSON.parse(leaderContents).leaders[i].user_name + "  " + JSON.parse(leaderContents).leaders[i].points + "</h5></li>");
            $("#slide-out").append("<li><h5>"+ JSON.parse(leaderContents).leaders[i].user_name + "  " + JSON.parse(leaderContents).leaders[i].points + "</h5></li>");
        }

    });

    $('.button-collapse').sideNav({
        menuWidth: 300,
        closeOnClick: true,
        edge: 'right', // <--- CHECK THIS OUT
    });

    $('.collapsible').collapsible();

});//main-function-close
