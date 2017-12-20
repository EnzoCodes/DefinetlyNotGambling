$(function(){
    //If you have a token saved locally, skip log-in.
    $.post("/", {token: window.localStorage.getItem("token")}).then(function(res){
        if(!res) {
            //console.log("No user logged in...")
        } else {
            console.log("User already authenticated: " + res.user_name);
            window.location.href = "/home";
        }
    }); // End 'skip-loggin'

    //Links to Admin page.
    $("#admin").on("click", function (){
        event.preventDefault();
        //Grab user...
        var user = {
            user_name: "ADMIN",
            password: "MinErinEnzo"
        };
        //Deny if no info entered...
        if (user.user_name != "ADMIN" || user.password != "MinErinEnzo") {
            alert("YOU AREN'T AN ADMIN!");
        } else {
            // Begin login validation...
            $.post("/logAttempt", user).then(function(res){
                if (res === null) {
                    $("#badCred").removeClass("hide");
                } else {
                    window.localStorage.setItem("token", res);
                    //console.log(localStorage.getItem("token"));
                    window.location.href = "/admin";
                }
            })
        }
    });

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
                    window.localStorage.setItem("token", res);
                    //console.log(localStorage.getItem("token"));
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
                        //console.log("New User created!");
                        //console.log(userData);
                        window.localStorage.setItem("token", userData.identity);
                        window.location.href = "/home";
                    })
                }
            });
        }
      });


});
