function getImageURL(){
    return "url(" + window.location.search.substring(1) + ")";
}


$(function() {
    $("#simple_sketch").css("background-image", getImageURL());
    $('#simple_sketch').sketch();
});