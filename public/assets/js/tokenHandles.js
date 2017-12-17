$(function(){


    $.post("/", {token: window.localStorage.getItem("token")}).then(function(data){

        if(!data){
            window.localStorage.clear();
            window.location.href = "/";
        } else {
            $("#userNameFill").txt("<p> '"+ data.user_name +"' </p>");
            $("#coinCountFill").txt("<p> '"+data.coin_count+"' </p>");
        }
    });

});
