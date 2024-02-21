$(document).ready(function(){
  $('#expression,#expression1').keypress(function (e) {    
                  var charCode = (e.which) ? e.which : event.keyCode    
                    if (String.fromCharCode(charCode).match(/[^0-9]/g))    
                      return false; 
                                        
              });
  $(".btn1").click(function() { 
              $("#expression,#expression1,#result").val(""); 
          }); 
  $(".btn").click(function(){
    var first= $('#expression').val();
    var second = $('#expression1').val();
    var third
    
    
    var Mybutton = $(this).attr('value');;
      console.log(Mybutton);
      if(Mybutton == '+'){
         third = parseInt(first) + parseInt(second);
          console.log(third)
          $("#result").val(third);
      }
      if(Mybutton == '-'){
         third = parseInt(first) - parseInt(second);
          console.log(third)
          $("#result").val(third);
      }
      if(Mybutton == '*'){
         third = parseInt(first) * parseInt(second);
          console.log(third)
          $("#result").val(third);
      }
      if(Mybutton == '/'){
         third = parseInt(first) / parseInt(second);
          console.log(third)
          $("#result").val(third);
      }
    
   });
  });