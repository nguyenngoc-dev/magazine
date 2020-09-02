$(document).ready(function(){
    $("#find").click(function(){
    $("#search").show();
   
    $(".hide").hide();
    })
    $(".close").click(function(){
     $("#search").hide();
    
     $(".hide").show();
    });
    
        $(window).scroll(function(){
        if($(this).scrollTop()>100)
        {
        $("#zoom-out").animate({'width':'130px','height':'140px'},"slow");
        }
       
        });
        
        
        
       
    });