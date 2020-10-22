let aboutOffset = $("#about").offset().top;

$(window).scroll(()=>
{
    let windowScroll=$(window).scrollTop();

    if(windowScroll > aboutOffset - 40)
    {
        $('#main-nav').css("backgroundColor","White");
        $("#navbarSupportedContent .nav-link , .navbar-brand").css("color", "#007bff");
        $("#main-nav ul li::after").css("backgroundColor", "#007bff");
        $("#btnUp").fadeIn(500);

    }else if(windowScroll < aboutOffset - 40)
    {
        $('#main-nav').css("backgroundColor"," rgba(0, 0, 0, 0.5)");
        $("#navbarSupportedContent .nav-link ,.navbar-brand").css("color", "white");
        $("#main-nav ul li::after").css("backgroundColor", "white");
        $("#btnUp").fadeOut(500);

    }
})


$("#btnUp").click(()=>
{
    $("html,body").animate({scrollTop:0}, 2000);
})


$("a[href^='#']").click(function(){
    let aHref = $(this).attr("href");
    let sectionOffset = $(aHref).offset().top;
    $("html,body").animate({scrollTop:sectionOffset}, 2000);

});


let colorItem = $(".color-item");

colorItem.eq(0).css("backgroundColor" , "Blue");
colorItem.eq(1).css("backgroundColor" , "red");
colorItem.eq(2).css("backgroundColor" , "green");
colorItem.eq(3).css("backgroundColor" , "orange");
colorItem.eq(4).css("backgroundColor" , "tomato");
colorItem.eq(5).css("backgroundColor" , "teal");

colorItem.click(function()
{
    let myColor = $(this).css("backgroundColor");

    $("p").css("color", myColor);
})


$("#sidebarToggle").click(function(){

   let colorboxWidth= $(".color-box").outerWidth(true);
   if($(".sidebar").css("left")=="0px"){
    $(".sidebar").animate({left:`${-colorboxWidth}`}, 1500);

   }
   else  
   {
    $(".sidebar").animate({left:`0px`}, 1500);

   }
})


$(document).ready(function(){

    $(".spinner").fadeOut(1000 , function (){

        $("#loading").fadeOut(1000 , function(){

            $('body').css("overflow", "auto");

            $("#loading").remove();
        });
    })
})



