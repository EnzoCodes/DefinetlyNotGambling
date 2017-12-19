$(function(){

  //Logout button
  $("#btnLogout").on("click", function(){
    window.localStorage.clear();
    window.location.href = "/"; /* NOTE: Perhaps change this to home page */
  });


  //Create Item
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

  //Delete item (admin page ONLY)
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

  //Flip questionmarks...
  $("#image").on("click", function() {

     $.ajax("/api/open", {
       type: "GET"
     }).then(
       function(data) {
         console.log("this worked", data);
         window.localStorage.setItem("Poop", JSON.stringify(data))
         console.log(data.list);
         // Reload the page to get the updated list
       }
     );
   });



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
