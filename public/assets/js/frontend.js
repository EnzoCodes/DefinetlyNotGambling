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

  $("#createitem").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newItem = {
      name: $("#createitem [name=name]").val().trim(),
      movie: $("#createitem [name=movie]").val().trim(),
      type: $("#createitem [name=type]").val().trim(),
      category: $("#createitem [name=category]").val().trim(),
      tier: $("#createitem [name=tier]").val().trim(),
      image: $("#createitem [name=image]").val().trim()
    };
    console.log(newItem);
    // Send the POST request.
    $.ajax("/admin", {
      type: "POST",
      data: newItem
    }).then(
      function () {
        console.log("created new item");
        // Reload the page to get the updated list
        location.reload();
      }
      );
  });
});
