$(function(){


    // Passes token to DB to check if local storage token matches DB token.
    // Then either clears local storage and boots user to login or fills partials.


    $("#btnLogin").on("click", function(event) {
        event.preventDefault();
        //Grab user...
        var user = {
            user_name: $("#txtUserName").val().trim(),
            password: $("#txtPassword").val().trim()
        };
        //Deny if no info entered...
        if (user.user_name === "" || user.password === "") {
            $("#noCred").removeClass("hide");
        } else {
            // Begin login validation...
            $.post("/logAttempt", user).then(function(res){
                if (res === null) {
                    $("#badCred").removeClass("hide");
                } else {
                    window.location.href = "/home";
                }
            })
        }
    });

    // Sign-Up BUTTON!
    $("#btnSignUp").on("click", function(event) {
        // Page doesn't reload.
        event.preventDefault();
        // Grab full user item from page.
        var newUser = {
            user_name: $("#txtUserName").val().trim(),
            password: $("#txtPassword").val().trim()
        };
        // Grab JUST username from page.
        var nUserN = $("#txtUserName").val().trim();
        // Check if fields are blank.
        if (newUser.user_name === "" || newUser.password === "") {
            $("#noCred").removeClass("hide");
        // If fields are not blanks
        } else {
            // Check for duplicate usernames in DB
            $.get("/duplicate/"+nUserN).then(function(res){
                if (res.length > 0){
                    $("#dupe").removeClass("hide");
                } else {
                    // If no dublicates, create new user object in DB.
                    $.post("/register", newUser).then(function(userData){
                        console.log("New User created!");
                        console.log(userData);
                        window.localStorage.setItem("token", userData.identity);
                        window.location.href = "/home";
                    })
                }
            });
        }
      });

      //Logout button
  $("#btnLogout").on("click", function(){
    window.localStorage.clear();
    window.location.href = "/"; /* NOTE: Perhaps change this to home page */
  });

  $("#createitem2").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newItem = {
      name: $("#createitem2 [name=name]").val().trim(),
      house: $("#createitem2 [name=house]").val().trim(),
      tier: $("#createitem2 [name=tier]").val().trim(),
      image: $("#createitem2 [name=image]").val().trim(),
      houseImage: $("#createitem2 [name=houseImage]").val().trim()
    };
    console.log(newItem);

    // Send the POST request.
    $.ajax("/admincreate", {
      type: "POST",
      data: newItem
    }).then(
      function () {
        console.log("created new item");
        // Reload the page to get the updated list
        location.reload();
      });
  });

  $("#admin").on("click", function (){
        window.location.href = "/admin";
  });

  $("#collection").on("click",function(){
    evnet.preventDefault();

    var identity = window.localStorage.getItem("token");

    $.ajax("/collection"+identity, {
       type: "GET"
     }).then(
       function() {
         // Reload the page to get the updated list
         window.location.href = "/collection/";
       }
     );

  });

//   I believe this is the broken code re: Var id
  $(".delete-item").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("id");
    console.log(id);
    // Send the DELETE request.

    $.ajax("/admin/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted id ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });//Delete Item Function Close

  $("#coinBtn").on("click", function(){
      $.post("/", {token: window.localStorage.getItem("token")}).then(function(res){
          if(!res) {
              window.localStorage.clear();
              window.location.href = "/";
          } else {

              var username = res.user_name;
              var coin = res.coin_count += 100;

              console.log(JSON.stringify(username));
              console.log(JSON.stringify(coin));

              $.ajax({
                  method: "PUT",
                  url: "/api/addCoin",
                  data: {
                      coin: coin,
                      username: username
                  }
              }).done(console.log("Coin count Updated"));
          }
      })
  });

//   $(".images").on("click", function(){
//     $.post("/", {token: window.localStorage.getItem("token")}).then(function(res){
//         if(!res) {
//             window.localStorage.clear();
//             window.location.href = "/";
//         } else {

//             var username = res.user_name;
//             var points = res.points += 100;

//             console.log(JSON.stringify(username));
//             console.log(JSON.stringify(coin));

//             $.ajax({
//                 method: "PUT",
//                 url: "/api/addCoin",
//                 data: {
//                     coin: coin,
//                     username: username
//                 }
//             }).done(console.log("Coin count Updated"));
//         }
//     })
// });

  $("#image").on("click", function() {
    
    var identity = window.localStorage.getItem("token");   
    console.log(identity);
     $.ajax("/api/open/"+identity, {
       type: "GET"
     }).then(
       function(data) {
         console.log("this worked", data);
         window.localStorage.setItem("Poop", JSON.stringify(data))
         console.log(data.list);
         // Reload the page to get the updated list
       }
     );
   });//Delete Item Function Close
 
 

});//Main Function Close

  //Logic to remove coins. Shold be placed somewhere inside 'open-box' button.

  // $.post("/", {token: window.localStorage.getItem("token")}).then(function(res){
  //     if(!res) {
  //         window.localStorage.clear();
  //         window.location.href = "/";
  //     } else {
  //
  //         var username = res.user_name;
  //         var coin = res.coin_count -= 25;
  //
  //         console.log(JSON.stringify(username));
  //         console.log(JSON.stringify(coin));
  //
  //         $.ajax({
  //             method: "PUT",
  //             url: "/api/removeCoin",
  //             data: {
  //                 coin: coin,
  //                 username: username
  //             }
  //         }).done(console.log("Coin count Updated"));
  //     }
  // });

  //TODO: ^^ Add this to 'open-box' button.


