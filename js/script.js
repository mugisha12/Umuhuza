function menu() {
  var x = document.getElementById("my-nav");
  y = document.getElementById("my-header");
  if (x.className === "top-nav") {
    x.className += " responsive";
    y.className +=" scroll";
  } else {
    x.className = "top-nav";
    y.className ="header";
  }
}
  $(document).ready(function(){
    $('.footer-btn').click(function(){
      $(window).scrollTop(0);
    });
  });


