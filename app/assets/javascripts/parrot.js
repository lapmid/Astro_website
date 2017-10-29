$(document).ready(function(){
    
    var parrotform=$('#parrot-form').value;
   $('#parrot-btn').keypress(function(event){

	var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
		parrotastrology(parrotform);
	}

});
    
    
    
});
        
window.onload = function() { 
                                $('#parrot-form').reset();
                                };   


                        var bquotess = new Array(21) 
                                bquotess[0]="Yeah, here is 75% chance of happening.";
                                bquotess[1]="No, bad luck, try another time.";
                                bquotess[2]="No, dark cloud around me!";
                                bquotess[3]="Yes, it is likely to be happen.";
                                bquotess[4]="Why are you asking this question?";
                                bquotess[5]="Wonderful, yeah!";
                                bquotess[6]="Yes, you can find same respond into yourself.";
                                bquotess[7]="Ask me again, I am restless and confused.";
                                bquotess[8]="I think you are also psychic, ask yourself.";
                                bquotess[8]="Great ! time is going on your way.";
                                bquotess[9]="No..do not leave the hope!";
                                bquotess[10]="You should forget about it...";
                                bquotess[11]="Yeah, it can happen, 95% chance for this.";
                                bquotess[12]="Yes, luck is coming on your door!";
                                bquotess[13]="Good luck, day is yours.";
                                bquotess[14]="Everything will be right..yes!";
                                bquotess[15]="Not at all this time!";
                                bquotess[16]="If you really want this, yes it can be.";
                                bquotess[17]="Yes, yes believe on yourself.";
                                bquotess[18]="Ask again please...";
                                bquotess[19]="50% chance for this question!";
                                bquotess[20]="Think so, your card is positive.";
                                  function parrotastrology(widgetparrotform) {
                                   if (widgetparrotform.parrot1.value == "")
                                   {
                                   alert("You did not ask anything to the Psychic Parrot!!!");
                                   widgetparrotform.parrot1.focus();
                                   document.getElementById('parrot4').innerHTML = "";
                                   return (false);
                                   }

                                    if (widgetparrotform.parrot1.value.length < 6)  {
                                            alert("Please Ask Question Properly!!!");
                                            widgetparrotform.parrot1.focus();
                                            document.getElementById('parrot4').innerHTML = "";
                                            return false;
                                        }
                                  if (document.getElementById('lname').value = document.getElementById('lname').value) {return (false);}
                                  var rand_int = Math.floor(Math.random()*21); 
                                  document.getElementById('parrot4').innerHTML=(bquotess[rand_int]);
                                var rfp = document.getElementById('parrot4');
                                rfp.style.opacity = 0;
                                setTimeout(function() {
                                var opacity = 0,
                                animate = setInterval(function() {
                                opacity += 0.05;
                                if (opacity >= 1) {
                                clearInterval(animate);
                                }
                                rfp.style.opacity = opacity;
                                }, 10);
                                }, 700);

                                  widgetparrotform.reset();
                                  return (true);
                                }


                                function rfparrot() {
                                   var rfp = document.getElementById ("parrot4");
                                   rfp.innerHTML = "";    
                                }


                                function numberOnly(txt, e) {
                                            var arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
                                            var code;
                                            if (window.event)
                                                code = e.keyCode;
                                            else
                                                code = e.which;
                                            var char4 = keychar = String.fromCharCode(code);
                                            if (arr.indexOf(char4) == -1)
                                                return false;
                                       }  


                                function stopRKey1(evt) { 
                                  var evt = (evt) ? evt : ((event) ? event : null); 
                                  var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null); 
                                  if ((evt.keyCode == 13) && (node.type=="text"))  {return false;} 
                                } 


                                document.onkeypress = stopRKey1;   
                                

                             
                               



                                


                                
                    