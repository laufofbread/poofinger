function getImageURL(){
    return "url(" + window.location.search.substring(1) + ")";
}

$("#inputbox").submit(
    function updateURL(){
        window.location.search = "?" + $("#typebox").val();
        return false;
});


$(function() {
    $("#simple_sketch").css("background-image", getImageURL());
    $('#simple_sketch').sketch({defaultColor: "#564023", defaultSize: "15px"});
});