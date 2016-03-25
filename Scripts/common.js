/* ----------------------------------------------------------
 *  -- My Barrie Examiner --
 *  -- Author - Pranav Kural --
 *  -- Git: https://github.com/pranav-kural/Newspaper-Website.git
 *  -- Website: http://pranav-kural.github.io/Newspaper-Website/ */

/*------------- Animation-
--- On Mouse Hover -----*/
var Selector;
var Property;
function onHover(selector, property, setValue) {
    Selector = selector;
    Property = property;
    var x = document.querySelectorAll(selector);
    for (var i = 0; i < x.length; i++) {
        switch (property) {
            case "changeBackgroundColor": x[i].style.backgroundColor = setValue; break;
            case "changeBackgroundImg": x[i].style.backgroundColor = setValue; break;
            case "changeBackground": x[i].style.backgroundColor = setValue; break;
            case "changeFontSize": x[i].style.backgroundColor = setValue; break;
            case "ChangeColor": x[i].style.backgroundColor = setValue; break;
            case "changeBorder": x[i].style.backgroundColor = setValue; break;
            case "ChangeShadow": x[i].style.backgroundColor = setValue; break; }
    }
}
function onHoverOut() {
    var x = document.querySelectorAll(Selector);
    for (var i = 0; i < x.length; i++) {
        switch (Property) {
            case "changeBackgroundColor": x[i].style.backgroundColor = "initial"; break;
            case "changeBackgroundImg": x[i].style.backgroundColor = "initial"; break;
            case "changeBackground": x[i].style.backgroundColor = "initial"; break;
            case "changeFontSize": x[i].style.backgroundColor = "initial"; break;
            case "ChangeColor": x[i].style.backgroundColor = "initial"; break;
            case "changeBorder": x[i].style.backgroundColor = "initial"; break;
            case "ChangeShadow": x[i].style.backgroundColor = "initial"; break; }
    }
}