/**
 * Created by Pranav Kural on 2016-03-25.
 */
//                                              /\
//-------------------------------------        //\\
//-----    Animations ---------               //--\\
//------------------------------------       //    \\

/*------------- Animation-
--- On Mouse Hover -----*/
var repeater;
var property;
var setValue;
var changeBackground;
var increaseFontSize;
var ChangeColor;
var ChangeBorder;
var ChangeShadow;
function onHover(selector, property, setValue) {
    var x = document.querySelectorAll(selector);
    for (var i = 0; i < x.length; i++) {
        switch (property) {
            case "changeBackgroundColor": x[i].style.backgroundColor = setValue; break;
        }
    }
}
function onHoverOut() {
    document.getElementById("hello").style.backgroundColor = "initial";
    clearInterval(repeater);
}