
  $(document).ready(function() {
  $(".button a span").click(function() {
    var btn = $(this).parent().parent();
    var loadSVG = btn.children("a").children(".load");
    var loadBar = btn.children("div").children("span");
    var checkSVG = btn.children("a").children(".check");
    
    btn.children("a").children("span").fadeOut(200, function() {
      btn.children("a").animate({
        width: 56 
      }, 100, function() {
        loadSVG.fadeIn(300);
        btn.animate({
          width: 320  
        }, 200, function() {
          btn.children("div").fadeIn(200, function() {
            loadBar.animate({
              width: "100%" 
            }, 2000, function() {
              loadSVG.fadeOut(200, function() {
                checkSVG.fadeIn(200, function() {
                  setTimeout(function() {
                    btn.children("div").fadeOut(200, function() {
                      loadBar.width(0);
                      checkSVG.fadeOut(200, function() {
                        btn.children("a").animate({
                          width: 150  
                        });
                        btn.animate({
                          width: 150
                        }, 300, function() {
                          btn.children("a").children("span").fadeIn(200);
                        });
                      });
                    });
                  }, 2000); 
                });
              });
            });
          });
        });
      });
    });
    
  });
  
});


function myFunction() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

