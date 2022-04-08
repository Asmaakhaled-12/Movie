
$("#closeIcon").click(function () {

    let linkscontainerWidth = $(".links-container").outerWidth();
    if ($(".nav-container").css("left") == "0px") {
        $(".nav-container").animate({ "left": -linkscontainerWidth }, 500);
        $("#closeIcon").removeClass("fa fa-align-justify fa-times");
        $("#closeIcon").addClass("fa fa-align-justify");
        $(".links-container ul li").animate({
            "paddingTop": "500",
            "opacity": "0"
        }, 500)

    }
    else {
        $(".nav-container").animate({ "left": 0 }, 500);
        $("#closeIcon").removeClass("fa-align-justify");
        $("#closeIcon").addClass("fa-align-justify fa-times");
        $(".links-container ul li").animate({
            "paddingTop": "25",
            "opacity": "1"
        }, 1000)
    }
})

