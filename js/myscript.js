function openLink(evt, animName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(animName).style.display = "block";
  evt.currentTarget.className += " w3-red";

  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

}

document.getElementById("home_btn").click();
// document.getElementById("home_btn").className += " w3-red";
// document.getElementById("home_btn_top").className += " w3-red";

//animation

var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.1em solid #000}";
    document.body.appendChild(css);
};

function ham_change(x) {
  x.classList.toggle("change");
  // window.alert(x.className);
  var display_status = document.getElementById('mobile-menu').style.display;
  if(display_status=="block"){
    document.getElementById('mobile-menu').style.display = "none";
  }
  else{
    document.getElementById('mobile-menu').style.display = "block";
  }
}

function openLink_mobile(evt, animName){
  openLink(evt,animName);
  ham_change(document.getElementById("ham_container"));
}

function showPage() {
  document.getElementById("loader_id").style.display = "none";
  document.getElementById("everything_id").style.display = "block";
}

function preloadtimer() {
  document.getElementById("everything_id").style.display = "none";
  myVar = setTimeout(showPage, 3000);
  // window.alert("called");
}

var textarea = document.getElementById("messagebox");
var heightLimit = 1000; /* Maximum height: 200px */

textarea.oninput = function() {
  textarea.style.height = ""; /* Reset the height*/
  textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
};

preloadtimer();
