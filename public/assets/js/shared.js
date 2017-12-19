$(function(){

    //ADMIN PAGE ADD
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

  $("#collection").on("click",function(){
    event.preventDefault();

    // var identity = window.localStorage.getItem("token");

    document.cookie = "identity="+window.localStorage.getItem("token");

    var x = document.cookie;
    console.log("this is cookie!!!!"+x);

    $.ajax("/collection", {
       type: "GET"
     }).then(
       function() {
         // Reload the page to get the updated list
         window.location.href = "/collection";
       }
     );

  });
  
  //ADMIN PAGE DELETE
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

  $(".update-item").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("id");
    console.log(id);
    // Send the DELETE request.

    $.ajax("/admin/" + id, {
      type: "PUT",
      data: {}
    }).then(
      function() {
        console.log("deleted id ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });//Update item close



});//Main Function Close
