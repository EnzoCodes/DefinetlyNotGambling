$(function(){
    
        $("#leaderboard").click(async function(){
    
          $("#slide-out").empty();
            await $.ajax("/api/leaderboard", {
                type: "GET"
            }).then(
                function(data) {
                    window.localStorage.setItem("leader-contents", JSON.stringify(data))
                });
    
            var leaderContents = window.localStorage.getItem("leader-contents");
    
            for (i = 0; i < 10; i++) {
                var points = JSON.parse(leaderContents).leaders[0].points;
                var username  = JSON.parse(leaderContents).leaders[0].user_name;
                $("#slide-out").append("<li><h5>"+ JSON.parse(leaderContents).leaders[i].user_name + "  " + JSON.parse(leaderContents).leaders[i].points + "</h5></li>");
            }
        });
    
        $('.button-collapse').sideNav({
            menuWidth: 300,
            closeOnClick: true,
            edge: 'right',
        });
    
        $('.collapsible').collapsible();
    
    });//main-function-close