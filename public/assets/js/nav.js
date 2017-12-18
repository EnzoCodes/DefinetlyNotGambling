$(function(){

    //Initial sign in check...
    // This is happening in nav.js because the nav bar loads on every page
    // except the loggin page. So we can do this with the partial.
    $.post("/", {token: window.localStorage.getItem("token")}).then(function(res){
        if(!res) {
            window.localStorage.clear();
            window.location.href = "/";
        } else {
            console.log("User authenticated: " + res.user_name);
        }
    });

    $('.button-collapse').sideNav();

};
