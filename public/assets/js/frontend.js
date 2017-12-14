$(function() {
  $("#createitem").on("submit", function(event) {
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
      function() {
        console.log("created new item");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
    });
    