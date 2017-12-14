$(function(){



























    $.post("/", {token: window.localStorage.getItem("token")}).then(function(data){

        if(!data){
            window.localStorage.clear();
        } else {
            // Set welcome message or already logged in.
            $("#txtUserName").attr("href", "/????");

            window.loclaStorage.clear();
        }
    });

    $("#btnSignUp").on("click", function(event) {
        event.preventDefault();
        var newUser = {
            user_name: $("#txtUserName [name= userName]").val().trim(),
            password: $("#txtPassword [name= password]").val().trim()
        };
        $.ajax("/register", {
            type: "POST",
            data: newUser
        }).then(function(argument){
            console.log("Maybe you made a new user!")
            console.log(argument);
        }
        );
      });

    // $("#btnLogin").on("click", function(event){
    //     event.preventDefault();
    //
    // });



}); // End Document ready.
