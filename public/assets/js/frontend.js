$(function(){

    // $.post("/", {token: window.localStorage.getItem("token")}).then(function(data){
    //
    //     if(!data){
    //         window.localStorage.clear();
    //     } else {
    //         // Set welcome message or already logged in...
    //         //????????????
    //         window.loclaStorage.clear();
    //     }
    // });

    //     if(!data){
    //         window.localStorage.clear();
    //     } else {
    //         // Set welcome message or already logged in.
    //         $("#txtUserName").attr("href", "/????");

    // Not sure what I'm doing here anymore...
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
                    })
                }
            });
        }
      });

    $("#btnLogin").on("click", function(event){
        event.preventDefault();
    
    });

//   $("#createitem").on("submit", function (event) {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();
//     var newItem = {
//       name: $("#createitem [name=name]").val().trim(),
//       movie: $("#createitem [name=movie]").val().trim(),
//       type: $("#createitem [name=type]").val().trim(),
//       category: $("#createitem [name=category]").val().trim(),
//       tier: $("#createitem [name=tier]").val().trim(),
//       image: $("#createitem [name=image]").val().trim()
//     };
//     console.log(newItem);
//     // Send the POST request.
//     $.ajax("/admin3", {
//       type: "POST",
//       data: newItem
//     }).then(
//       function () {
//         console.log("created new item");
//         // Reload the page to get the updated list
//         location.reload();
//       }
//       );
//   });


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

});
