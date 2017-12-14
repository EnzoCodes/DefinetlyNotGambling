$(document).ready(function(){


    $.post("/", {token: window.localStorage.getItem("token")}).then(function(data){

        if(!data){
            window.localStorage.clear();
        } else {
            $("#txtUserName").attr("href", "/????");
            $("#txtPassword").attr("href", "/?????");

            window.loclaStorage.clear();
        }
    })

    $("#btnSignUp").on("click", function(event) {
        event.preventDefault();
        var newUser = {
            user_name: $("#txtUserName [name= userName]").val().trim(),
            password: $("#txtPassword [name= password]").val().trim()
        };
        $.ajax("/register", {
            type: "POST",
            data: newUser
        }).then(function(){
            return newUser;
        }
        );
      });

    // $("#btnLogin").on("click", function(event){
    //     event.preventDefault();
    //
    // });




}); // End Document ready.
