import $ from "jquery";

$(document).ready(function(){
    $("button").click(function(){
        var imgUrl = $(this).data('rel');
        $("#area").html("<img src='" + imgUrl + "' alt='description' />");
    });
});
