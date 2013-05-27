function getImageURL(){
    return "url(" + window.location.search.substring(1) + ")";
}

function updateURL(){
    window.location.search = $("#typebox").val();
}


$(function() {
    $("#simple_sketch").css("background-image", getImageURL());
    $('#simple_sketch').sketch({defaultColor: "#564023", defaultSize: "15px"});
});


// write function that takes one argument 
// updates the query string with contents of one argument 
// redirects user to url