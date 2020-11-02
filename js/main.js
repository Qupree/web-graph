$( "#menu-btn" ).click(function() {
    if($('nav').width() == 70){
        $( "nav" ).animate({
            width: "300px"
             }, 250 );
    }else{
        $( "nav" ).animate({
            width: "70px"
             }, 250 );
    }
});