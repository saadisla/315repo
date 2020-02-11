function initNav(){

    $("a").click(function(e){
        var cp = PROVIDER.getCurrentPageName();
        SAAD_UTILITY.trace("initNav ", cp);
        var btnId = e.currentTarget.id;

        if(cp!= btnId){
            loadContent(btnId);
        }

        
    });
}

function loadContent(pageName){

    var pageContent = PROVIDER.getPageContent(pageName);

    $(".content").html(pageContent);

    initNav();
}

function populateNav(){
    

    var nav = PROVIDER.getMainNav();

    $.each(nav, function(idx, link){
        //console.log(link);
        $("nav").append(`<a id="${link.path}" href="#">${link.linkName}</a>`);
    });

    loadContent("home");

}

function dataIsLoaded(){
    //console.log("loaded");
    populateNav();
}

$(document).ready(function(){
   // alert('Hello'); 
   PROVIDER.getData(dataIsLoaded);
});