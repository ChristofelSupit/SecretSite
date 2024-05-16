var hero = $(".hero_area");
var menu = $(".custom_menu-container");
$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > hero.height()) {
        menu.addClass("menu_fixed-position");
        $(".custom_menu-container + section").addClass("mt-5");
    } else {
        menu.removeClass("menu_fixed-position");
        $(".custom_menu-container + section").removeClass("mt-5");
    }
});


var myCircle = Circles.create({
    id: "circles-1",
    radius: 65,
    value: 25,
    maxValue: 100,
    width: 5,
    text: function (value) {
        return value + "%";
    },
    colors: ["transparent", "#ffffff"],
    duration: 400,
    wrpClass: "circles-wrp",
    textClass: "progress_text",
    valueStrokeClass: "circles-valueStroke",
    maxValueStrokeClass: "circles-maxValueStroke",
    styleWrapper: true,
    styleText: true
});
var myCircle = Circles.create({
    id: "circles-2",
    radius: 65,
    value: 43,
    maxValue: 100,
    width: 5,
    text: function (value) {
        return value + "%";
    },
    colors: ["transparent", "#ffffff"],
    duration: 400,
    wrpClass: "circles-wrp",
    textClass: "progress_text",
    valueStrokeClass: "circles-valueStroke",
    maxValueStrokeClass: "circles-maxValueStroke",
    styleWrapper: true,
    styleText: true
});
var myCircle = Circles.create({
    id: "circles-3",
    radius: 65,
    value: 48,
    maxValue: 100,
    width: 5,
    text: function (value) {
        return value + "%";
    },
    colors: ["transparent", "#ffffff"],
    duration: 400,
    wrpClass: "circles-wrp",
    textClass: "progress_text",
    valueStrokeClass: "circles-valueStroke",
    maxValueStrokeClass: "circles-maxValueStroke",
    styleWrapper: true,
    styleText: true
});
var myCircle = Circles.create({
    id: "circles-4",
    radius: 65,
    value: 10,
    maxValue: 100,
    width: 5,
    text: function (value) {
        return value + "%";
    },
    colors: ["transparent", "#ffffff"],
    duration: 400,
    wrpClass: "circles-wrp",
    textClass: "progress_text",
    valueStrokeClass: "circles-valueStroke",
    maxValueStrokeClass: "circles-maxValueStroke",
    styleWrapper: true,
    styleText: true
});