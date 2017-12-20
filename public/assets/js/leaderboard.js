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
            //console.log(leaderContents);
           // console.log(leaderContents);
           console.log(JSON.parse(leaderContents).leaders[0].data[0].id); 

          for (i = 0; i < 10; i++) {
                $("#slide-out").append("<li><a href=/collection/:id id='" + JSON.parse(leaderContents).leaders[0].data[i].id + "' class='getProfile'>"+ JSON.parse(leaderContents).leaders[0].data[i].user_name + "  " + JSON.parse(leaderContents).leaders[0].data[i].points + "</a></li>").attr("data-id", JSON.parse(leaderContents).leaders[0].data[i].id);
                  
            }

        //    console.log(JSON.parse(leaderContents).leaders[0].tier3[0]); 
        //     if (JSON.parse(leaderContents).leaders[0].tier4.length > 0){
        //         for (i = 0; i<JSON.parse(leaderContents).leaders[0].tier4.length; i++) {
        //             $(".smimage").append("<li><img src="+"'"+ JSON.parse(leaderContents).leaders[0].tier4[i].image + "'></li>");
               
        //                      }
        //     }
        //     else if (JSON.parse(leaderContents).leaders[0].tier4.length === 0) {
        //        for (i = 0; i<3; i++) {
        //         console.log(JSON.parse(leaderContents).leaders[0].tier3[i].name); 
        //         $(".smimage").append("<li><img class='left' height='40px' src="+"'"+ JSON.parse(leaderContents).leaders[0].tier3[i].image+ "'></li>");
        //        console.log("<li><img class='left' width='10px' src="+"'"+ JSON.parse(leaderContents).leaders[0].tier3[i].image+ "'></li>");
        //         //console.log(JSON.parse(leaderContents).leaders[0].tier3[i]);
        //        }
           
        //    }
            // var points = JSON.parse(leaderContents).leaders[0].points;
            // var username  = JSON.parse(leadrContents).leaders[0].user_name;
            // for (i = 0; i < 10; i++) {
      
            //     $("#slide-out").append("<li><h5>"+ JSON.parse(leaderContents).leaders[i].user_name + "  " + JSON.parse(leaderContents).leaders[i].tierall.points + "</h5></li>");
            // }
        });
    
        $('.button-collapse').sideNav({
            menuWidth: 300,
            closeOnClick: true,
            edge: 'right',
        });
    
        $('.collapsible').collapsible();
    
    });//main-function-close