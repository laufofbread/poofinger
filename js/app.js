function getImageURL(){
    return "url(" + window.location.search.substring(1) + ")";
}

$("#image").css("background-image", getImageURL())