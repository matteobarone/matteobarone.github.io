//JQuery script to open and close the PLUS section
$(document).ready(function(){
    $("#piu").click(function(){
        $("#piu").toggleClass("expandPlus");

        $(".circle").toggleClass("hideCircle");
        $(".bio").toggleClass("hide");
        $(".version-box").toggleClass("hide");
        
        $(".projects").toggleClass("showProjects");

        $("body").toggleClass("noBorderBody");

        //to fix
        $(".close-X").removeClass("animate-close-X-off");
        $(".close-X").addClass("animate-close-X");
        //
    });

    $("#close-X").click(function(){

        $("#piu").toggleClass("expandPlus");

        $(".circle").toggleClass("hideCircle");
        $(".bio").toggleClass("hide");
        $(".version-box").toggleClass("hide");
        
        $(".projects").toggleClass("showProjects");

        $("body").toggleClass("noBorderBody");

        //to fix
        $(".close-X").removeClass("animate-close-X");
        $(".close-X").addClass("animate-close-X-off");
        //
    });
});



//Script to manage the changing version (White/Blue)
function loadjscssfile(filename, filetype){
    if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}

data = new Date();

ora = data.getHours();
minuti = data.getMinutes();



if(ora >= 8 || ora < 20){
    //alert("Ora attuale: " + ora + ":" + (minuti< 10 ? "0"+minuti : minuti));
    var oreMancanti = 19 - ora;
    var minutiMancanti = 60 - minuti;
    //alert("Mancano: " + oreMancanti + ":" + minutiMancanti + " al cambio di versione");
}

//loadjscssfile("mystyle.css", "css") ////dynamically load and add this .css file