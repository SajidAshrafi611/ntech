
$(document).ready(function(){
  $("#navbarDropdown").mouseover(function(){
    $(".dropdown-menu").show();
    }); 
  });

$(document).ready(function(){
  $("#navbarDropdown").mouseout(function(){
    $(".dropdown-menu").hide();
    }); 
  });


$(document).ready(function(){
  $("p.p1").mouseover(function(){
    $(this).css("background-color", "blue");
    $(this).css(fadeIn(3000));
    }); 
  });
  $(document).ready(function(){
    $("p.p1").mouseout(function(){
      $(this).css("background-color", "white")
      }); 
    });  
      