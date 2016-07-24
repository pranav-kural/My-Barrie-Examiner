/* ----------------------------------------------------------
 *  -- My Barrie Examiner --
 *  -- Author - Pranav Kural --
 *  -- Git: https://github.com/pranav-kural/My-Barrie-Examiner.git
 *  -- Website: http://pranav-kural.github.io/My-Barrie-Examiner/ */


function insertHeader() {
    var head = document.getElementById("head");
    head.innerHTML =
        '<header role="banner"> <div class="header row"> <div class="heading row"> <div class="title col-lg-12 col-md-12 col-sm-12 col-xs-12"> <h1 class="col-lg-4 col-md-4 col-sm-12 col-xs-12 left"><span>The </span><span>Barrie </span><span>Examiner</span> </h1></div> <div class="col-lg-12 col-md-12 hidden-sm hidden-xs text-center share-bar"> <h3><a href="index.html" class="share-icons"><span class="col-lg-3 col-md-3 fa fa-facebook share-icons"></span></a></h3> <h3><a href="index.html" class="share-icons"><span class="col-lg-3 col-md-3 fa fa-comments"></span></a></h3> <h3><a href="index.html" class="share-icons"><span class="col-lg-3 col-md-3 fa fa-twitter"></span></a></h3> <h3><a href="index.html" class="share-icons"><span class="col-lg-3 col-md-3 fa fa-google-plus"></span></a> </h3> </div> </div> <div class="row" id="main_nav"> <nav role="navigation" class="navbar navbar-inverse" data-spy="affix" data-offset-top="130"> <ul class="col-lg-12 col-md-12 col-sm-12 col-xs-12"> <li class="nav_link col-lg-3 col-md-3"><a href="index.html" id="home-icon"><span class="fa fa-home home-icon"></span></a></li> <li class="nav_link col-lg-3 col-md-3"><a href="index.html"><img id="icon-img-news" src="Assets/icons/downloaded/news.svg"></a></li> <li class="nav_link col-lg-3 col-md-3"><a href="About.html"><img id="icon-img-about" src="Assets/icons/downloaded/about-us.png"></a> </li> <li class="nav_link col-lg-3 col-md-3"><a href="Contact.html"><span><img id="icon-img-contact" src="Assets/icons/downloaded/contact-us-orange.svg"></span></a> </li> <li id="" class="nav_link hidden-lg hidden-md"><h1 id="small-nav-btn" onclick="openNav()"><span class="fa fa-bars"></span></h1></li> </ul> </nav> </div> </div> </header>';
}

function insertFooter() {
    var foot = document.getElementById("foot");
    foot.innerHTML = '<footer class="col-lg-12 col-sm-12 col-md-12 col-xs-12"> <div class="row foot-details panel-footer"> <ul class="col-lg-3 col-md-3 col-sm-3 col-xs-12"> <li> ----------- </li> <li><span class="fa fa-copyright"> - 2016</span></li> <li> ---------------------- </li> <li>Pranav Kural</li> <li> ----------- </li> </ul> <ul class="col-lg-6 col-md-6 col-sm-6 col-xs-12"> <li> ----------- </li> <li>The Barrie Examiner</li> <li> ---------------------- </li> <li>The top news site</li> <li> ----------- </li> </ul> <ul class="col-lg-3 col-md-3 col-sm-3 col-xs-12"> <li><a href="#top"><span class="fa fa-angle-double-up">Go To Top</span></a></li> <li><a href="index.html">Home</a></li> <li><a href="About.html">About</a></li> <li><a href="Contact.html">Contact</a></li> <li> ----------- </li> </ul> </div> </footer>';
}

    function ValidateForm() {
        var Xstate = 0;
        var sometext = document.getElementById("SomeText");

        if (sometext.value == "") {
            DisplayError("SomeText");
        }
        else {
            Xstate++;
            //alert(sometext.value);
        }

        var options = document.getElementsByName("Options");

        //alert("There are " + options.length + " options to choose form");

        var array = GetSelectedOptions("Options");

        if (array.length < 1) {
            DisplayError("Options")
        }
        else {
            Xstate++;
        }

        var email = document.getElementById("emailaddress1");

        if (validateEmail(email.value)) {
            Xstate++;
            //alert("Valid email");
        }
        else {
            DisplayError("emailaddress1");
        }

        var province = document.getElementById("Province");

        if (province.value == "") {
            DisplayError("Province");
        }
        else {
            Xstate++;
        }

        var gender = document.getElementsByName("Gender");

        var garray = GetSelectedOptions("Gender");

        if (garray.length < 1) {
            DisplayError("Gender");
        }
        else {
            Xstate++;
        }

        var telephone = document.getElementById("tel1");

        if (telephone.value == "") {
            DisplayError("tel1");
            alert("Empty");
        }
        else if(ValidateNumbers(telephone.value) == false){
            DisplayError("tel1");
            alert("Invalid characters");
        }
        else if(telephone.value.length < 10) {
            DisplayError("tel1");
            alert("Invalid length");
        }
        else {
            Xstate++;
        }

        var el = document.getElementById("UserProlfileForm");
        var el2 = document.getElementById("thankYou");
        if (Xstate === 6) {
        el.style.display = "none";
        el2.style.display = "block";
        }
    }

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function ValidateNumbers(text) {
    var tmp = new String(text);

    for(var i = 0; i < tmp.length; i++)
    {
        var x = tmp.substring(i, i + 1);
        //alert(x);
        var y = isNaN(x);
        //alert(y);
        if(y == true){
            return(false);
        }
    }

    return(true);
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function GetSelectedOptions(name) {
    var options = document.getElementsByName(name);
    var optArray = new Array();
    var x = 0;

    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            optArray[x] = options[i].value;
            x++;
        }
    }

    return (optArray);
}

function DisplayError(id) {
    var sometexterr = document.getElementById(id + "Err");
    sometexterr.style.display = "block";
}



/*------------- Animation-
--- On Mouse Hover ------*/
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


/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.getElementById("main").style.marginLeft = "300px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}
