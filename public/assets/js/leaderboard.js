$(function(){
    
        $(".point").click(function(){
            console.log("hi");


        });

        // $("#1").click(function(){
        //     var clickSound = new Audio("assets/sounds/arena.mp3");
        //     clickSound.play();
        //     var poop = window.localStorage.getItem("Poop");
        //     var tier1  = (JSON.parse(poop).list[0].tier); 
        //     var pimage = JSON.parse(poop).list[0].image;

        //     $("#1").attr("src", pimage); 
        //         if (tier1 === 4) {
        //             var point = 50; 
        //             console.log(point);
        //         }
        //         else if (tier1 === 3) {
        //             var point = 20; 
        //             console.log(point);
        //         }
        //         else if (tier1 === 2) {
        //             var point = 10; 
        //             console.log(point);
        //         }
        //         else {
        //             var point = 2; 
        //             console.log(point);
        //         }

        //     $.post("/", {token: window.localStorage.getItem("token")}).then(function(res){
        //         if(!res) {
        //             window.localStorage.clear();
        //             window.location.href = "/";
        //         } else {
        //             console.log(res); 
        //             var username = res.user_name;
        //             var poi = res.points += point;
        //             console.log(JSON.stringify(username));
        //             console.log(JSON.stringify(poi));

        //             $.ajax({
        //                 method: "PUT",
        //                 url: "/api/addPoints",
        //                 data: {
        //                     points: poi,
        //                     username: username
        //                 }
        //             }).done(console.log("Points count Updated"));
        //         }
        //     })
        });