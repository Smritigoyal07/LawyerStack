// alert("hi")
$(".bttttn").hide();
$(".btttn").on("click",function(){
    $("p").removeClass("tohide");
    $(".bttttn").show();
    $(".btttn").hide();
    // console.log("hi");
});
$(".bttttn").on("click",function(){
    $("p").addClass("tohide");
    $(".btttn").show();
    $(".bttttn").hide();
    // console.log("bye");
});
