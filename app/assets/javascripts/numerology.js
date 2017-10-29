var wwnumeroform= document.getElementById('wwnumeroform');


window.onload = function() { 
wwnumeroform.reset();
};



function wnumerology(wwnumeroform) {
 var a1 = document.wwnumeroform.birthday.selectedIndex;
 var a2 = document.wwnumeroform.month.selectedIndex;
 document.wwnumeroform.radicalnumber.value;
 document.wwnumeroform.luckynumbers.value;
 document.wwnumeroform.luckycolors.value;
 document.wwnumeroform.luckydays.value;
 document.wwnumeroform.luckygems.value;
  if (wwnumeroform.birthday.selectedIndex == 0)
  {
    alert("The first \"Date\" option is not a valid selection.  Please choose one of the other options.");
    wwnumeroform.birthday.focus();
    return (false);
  }
  if (wwnumeroform.month.selectedIndex == 0)
  {
    alert("The first \"Month\" option is not a valid selection.  Please choose one of the other options.");
    wwnumeroform.month.focus();
    return (false);
  }
  if (wwnumeroform.year.selectedIndex == 0)
  {
    alert("The first \"Year\" option is not a valid selection.  Please choose one of the other options.");
    wwnumeroform.year.focus();
    return (false);
  }
   if (document.getElementById('lname').value = document.getElementById('lname').value) {return (false);}
  if (a2 == 2 && a1 > 29) {alert("There are only a maximum of 29 days in February."); wwnumeroform.birthday.focus(); return false;}
  if (a2 == 4 && a1 == 31) {alert("There are only 30 days in April."); wwnumeroform.birthday.focus(); return false;}
  if (a2 == 6 && a1 == 31) {alert("There are only 30 days in June."); wwnumeroform.birthday.focus(); return false;}
  if (a2 == 9 && a1 == 31) {alert("There are only 30 days in September."); wwnumeroform.birthday.focus(); return false;}
  if (a2 == 11 && a1 == 31) {alert("There are only 30 days in November."); wwnumeroform.birthday.focus(); return false;}
   if (a1 == 1 ) {document.wwnumeroform.radicalnumber.value = "1";}
   if (a1 == 2 ) {document.wwnumeroform.radicalnumber.value = "2";}
   if (a1 == 3 ) {document.wwnumeroform.radicalnumber.value = "3";}
   if (a1 == 4 ) {document.wwnumeroform.radicalnumber.value = "4";}
   if (a1 == 5 ) {document.wwnumeroform.radicalnumber.value = "5";}
   if (a1 == 6 ) {document.wwnumeroform.radicalnumber.value = "6";}
   if (a1 == 7 ) {document.wwnumeroform.radicalnumber.value = "7";}
   if (a1 == 8 ) {document.wwnumeroform.radicalnumber.value = "8";}
   if (a1 == 9 ) {document.wwnumeroform.radicalnumber.value = "9";}
   if (a1 == 10 ) {document.wwnumeroform.radicalnumber.value = "1";}
   if (a1 == 11 ) {document.wwnumeroform.radicalnumber.value = "2";}
   if (a1 == 12 ) {document.wwnumeroform.radicalnumber.value = "3";}
   if (a1 == 13 ) {document.wwnumeroform.radicalnumber.value = "4";}
   if (a1 == 14 ) {document.wwnumeroform.radicalnumber.value = "5";}
   if (a1 == 15 ) {document.wwnumeroform.radicalnumber.value = "6";}
   if (a1 == 16 ) {document.wwnumeroform.radicalnumber.value = "7";}
   if (a1 == 17 ) {document.wwnumeroform.radicalnumber.value = "8";}
   if (a1 == 18 ) {document.wwnumeroform.radicalnumber.value = "9";}
   if (a1 == 19 ) {document.wwnumeroform.radicalnumber.value = "1";}
   if (a1 == 20 ) {document.wwnumeroform.radicalnumber.value = "2";}
   if (a1 == 21 ) {document.wwnumeroform.radicalnumber.value = "3";}
   if (a1 == 22 ) {document.wwnumeroform.radicalnumber.value = "4";}
   if (a1 == 23 ) {document.wwnumeroform.radicalnumber.value = "5";}
   if (a1 == 24 ) {document.wwnumeroform.radicalnumber.value = "6";}
   if (a1 == 25 ) {document.wwnumeroform.radicalnumber.value = "7";}
   if (a1 == 26 ) {document.wwnumeroform.radicalnumber.value = "8";}
   if (a1 == 27 ) {document.wwnumeroform.radicalnumber.value = "9";}
   if (a1 == 28 ) {document.wwnumeroform.radicalnumber.value = "1";}
   if (a1 == 29 ) {document.wwnumeroform.radicalnumber.value = "2";}
   if (a1 == 30 ) {document.wwnumeroform.radicalnumber.value = "3";}
   if (a1 == 31 ) {document.wwnumeroform.radicalnumber.value = "4";}
   if (a1 == 1 ) {document.wwnumeroform.luckynumbers.value = "1,2,4,7,10,16,19,25,28, 29";}
   if (a1 == 2 ) {document.wwnumeroform.luckynumbers.value = "1,2,6,7,9,11,16,20,19,25,29,31";}
   if (a1 == 3 ) {document.wwnumeroform.luckynumbers.value = "3,6,9,12,15,18,21,24,27,30";}
   if (a1 == 4 ) {document.wwnumeroform.luckynumbers.value = "1,2,7,10,11,16,19,20,25,28,29";}
   if (a1 == 5 ) {document.wwnumeroform.luckynumbers.value = "5,6,14,15,23,24";}
   if (a1 == 6 ) {document.wwnumeroform.luckynumbers.value = "3,6,9,12,14,15,18,21,24,27,30";}
   if (a1 == 7 ) {document.wwnumeroform.luckynumbers.value = "2,7,11,16,20,25,29";}
   if (a1 == 8 ) {document.wwnumeroform.luckynumbers.value = "1,7,10,16,19,25";}
   if (a1 == 9 ) {document.wwnumeroform.luckynumbers.value = "2,3,6,9,11,12,14,15,18,21,24,27,30";}
   if (a1 == 10 ) {document.wwnumeroform.luckynumbers.value = "1,2,4,7,10,16,19,25,28, 29";}
   if (a1 == 11 ) {document.wwnumeroform.luckynumbers.value = "1,2,6,7,9,11,16,20,19,25,29,31";}
   if (a1 == 12 ) {document.wwnumeroform.luckynumbers.value = "3,6,9,12,15,18,21,24,27,30";}
   if (a1 == 13 ) {document.wwnumeroform.luckynumbers.value = "1,2,7,10,11,16,19,20,25,28,29";}
   if (a1 == 14 ) {document.wwnumeroform.luckynumbers.value = "5,6,14,15,23,24";}
   if (a1 == 15 ) {document.wwnumeroform.luckynumbers.value = "3,6,9,12,14,15,18,21,24,27,30";}
   if (a1 == 16 ) {document.wwnumeroform.luckynumbers.value = "2,7,11,16,20,25,29";}
   if (a1 == 17 ) {document.wwnumeroform.luckynumbers.value = "1,7,10,16,19,25";}
   if (a1 == 18 ) {document.wwnumeroform.luckynumbers.value = "2,3,6,9,11,12,14,15,18,21,24,27,30";}
   if (a1 == 19 ) {document.wwnumeroform.luckynumbers.value = "1,2,4,7,10,16,19,25,28, 29";}
   if (a1 == 20 ) {document.wwnumeroform.luckynumbers.value = "1,2,6,7,9,11,16,20,19,25,29,31";}
   if (a1 == 21 ) {document.wwnumeroform.luckynumbers.value = "3,6,9,12,15,18,21,24,27,30";}
   if (a1 == 22 ) {document.wwnumeroform.luckynumbers.value = "1,2,7,10,11,16,19,20,25,28,29";}
   if (a1 == 23 ) {document.wwnumeroform.luckynumbers.value = "5,6,14,15,23,24";}
   if (a1 == 24 ) {document.wwnumeroform.luckynumbers.value = "3,6,9,12,14,15,18,21,24,27,30";}
   if (a1 == 25 ) {document.wwnumeroform.luckynumbers.value = "2,7,11,16,20,25,29";}
   if (a1 == 26 ) {document.wwnumeroform.luckynumbers.value = "1,7,10,16,19,25";}
   if (a1 == 27 ) {document.wwnumeroform.luckynumbers.value = "2,3,6,9,11,12,14,15,18,21,24,27,30";}
   if (a1 == 28 ) {document.wwnumeroform.luckynumbers.value = "1,2,4,7,10,16,19,25,28, 29";}
   if (a1 == 29 ) {document.wwnumeroform.luckynumbers.value = "1,2,6,7,9,11,16,20,19,25,29,31";}
   if (a1 == 30 ) {document.wwnumeroform.luckynumbers.value = "3,6,9,12,15,18,21,24,27,30";}
   if (a1 == 31 ) {document.wwnumeroform.luckynumbers.value = "1,2,7,10,11,16,19,20,25,28,29";}
   if (a1 == 1 ) {document.wwnumeroform.luckycolors.value = "Red & Orange";}
   if (a1 == 2 ) {document.wwnumeroform.luckycolors.value = "White & Cream";}
   if (a1 == 3 ) {document.wwnumeroform.luckycolors.value = "Violet & Purple";}
   if (a1 == 4 ) {document.wwnumeroform.luckycolors.value = "Blue & Grey";}
   if (a1 == 5 ) {document.wwnumeroform.luckycolors.value = "Red & Green";}
   if (a1 == 6 ) {document.wwnumeroform.luckycolors.value = "Blue & Pink";}
   if (a1 == 7 ) {document.wwnumeroform.luckycolors.value = "White & Yellow";}
   if (a1 == 8 ) {document.wwnumeroform.luckycolors.value = "Black & Blue";}
   if (a1 == 9 ) {document.wwnumeroform.luckycolors.value = "Red & Pink";}
   if (a1 == 10 ) {document.wwnumeroform.luckycolors.value = "Red & Orange";}
   if (a1 == 11 ) {document.wwnumeroform.luckycolors.value = "White & Cream";}
   if (a1 == 12 ) {document.wwnumeroform.luckycolors.value = "Violet & Purple";}
   if (a1 == 13 ) {document.wwnumeroform.luckycolors.value = "Blue & Grey";}
   if (a1 == 14 ) {document.wwnumeroform.luckycolors.value = "Red & Green";}
   if (a1 == 15 ) {document.wwnumeroform.luckycolors.value = "Blue & Pink";}
   if (a1 == 16 ) {document.wwnumeroform.luckycolors.value = "White & Yellow";}
   if (a1 == 17 ) {document.wwnumeroform.luckycolors.value = "Black & Blue";}
   if (a1 == 18 ) {document.wwnumeroform.luckycolors.value = "Red & Pink";}
   if (a1 == 19 ) {document.wwnumeroform.luckycolors.value = "Red & Orange";}
   if (a1 == 20 ) {document.wwnumeroform.luckycolors.value = "White & Cream";}
   if (a1 == 21 ) {document.wwnumeroform.luckycolors.value = "Violet & Purple";}
   if (a1 == 22 ) {document.wwnumeroform.luckycolors.value = "Blue & Grey";}
   if (a1 == 23 ) {document.wwnumeroform.luckycolors.value = "Red & Green";}
   if (a1 == 24 ) {document.wwnumeroform.luckycolors.value = "Blue & Pink";}
   if (a1 == 25 ) {document.wwnumeroform.luckycolors.value = "White & Yellow";}
   if (a1 == 26 ) {document.wwnumeroform.luckycolors.value = "Black & Blue";}
   if (a1 == 27 ) {document.wwnumeroform.luckycolors.value = "Red & Pink";}
   if (a1 == 28 ) {document.wwnumeroform.luckycolors.value = "Red & Orange";}
   if (a1 == 29 ) {document.wwnumeroform.luckycolors.value = "White & Cream";}
   if (a1 == 30 ) {document.wwnumeroform.luckycolors.value = "Violet & Purple";}
   if (a1 == 31 ) {document.wwnumeroform.luckycolors.value = "Blue & Grey";}
   if (a1 == 1 ) {document.wwnumeroform.luckydays.value = "Sunday & Monday";}
   if (a1 == 2 ) {document.wwnumeroform.luckydays.value = "Monday & Friday";}
   if (a1 == 3 ) {document.wwnumeroform.luckydays.value = "Thursday & Friday";}
   if (a1 == 4 ) {document.wwnumeroform.luckydays.value = "Saturday & Sunday";}
   if (a1 == 5 ) {document.wwnumeroform.luckydays.value = "Wednesday & Friday";}
   if (a1 == 6 ) {document.wwnumeroform.luckydays.value = "Tuesday & Friday";}
   if (a1 == 7 ) {document.wwnumeroform.luckydays.value = "Sunday & Monday";}
   if (a1 == 8 ) {document.wwnumeroform.luckydays.value = "Saturday & Sunday";}
   if (a1 == 9 ) {document.wwnumeroform.luckydays.value = "Thursday & Friday";}
   if (a1 == 10 ) {document.wwnumeroform.luckydays.value = "Sunday & Monday";}
   if (a1 == 11 ) {document.wwnumeroform.luckydays.value = "Monday & Friday";}
   if (a1 == 12 ) {document.wwnumeroform.luckydays.value = "Thursday & Friday";}
   if (a1 == 13 ) {document.wwnumeroform.luckydays.value = "Saturday & Sunday";}
   if (a1 == 14 ) {document.wwnumeroform.luckydays.value = "Wednesday & Friday";}
   if (a1 == 15 ) {document.wwnumeroform.luckydays.value = "Tuesday & Friday";}
   if (a1 == 16 ) {document.wwnumeroform.luckydays.value = "Sunday & Monday";}
   if (a1 == 17 ) {document.wwnumeroform.luckydays.value = "Saturday & Sunday";}
   if (a1 == 18 ) {document.wwnumeroform.luckydays.value = "Thursday & Friday";}
   if (a1 == 19 ) {document.wwnumeroform.luckydays.value = "Sunday & Monday";}
   if (a1 == 20 ) {document.wwnumeroform.luckydays.value = "Monday & Friday";}
   if (a1 == 21 ) {document.wwnumeroform.luckydays.value = "Thursday & Friday";}
   if (a1 == 22 ) {document.wwnumeroform.luckydays.value = "Saturday & Sunday";}
   if (a1 == 23 ) {document.wwnumeroform.luckydays.value = "Wednesday & Friday";}
   if (a1 == 24 ) {document.wwnumeroform.luckydays.value = "Tuesday & Friday";}
   if (a1 == 25 ) {document.wwnumeroform.luckydays.value = "Sunday & Monday";}
   if (a1 == 26 ) {document.wwnumeroform.luckydays.value = "Saturday & Sunday";}
   if (a1 == 27 ) {document.wwnumeroform.luckydays.value = "Thursday & Friday";}
   if (a1 == 28 ) {document.wwnumeroform.luckydays.value = "Sunday & Monday";}
   if (a1 == 29 ) {document.wwnumeroform.luckydays.value = "Monday & Friday";}
   if (a1 == 30 ) {document.wwnumeroform.luckydays.value = "Thursday & Friday";}
   if (a1 == 31 ) {document.wwnumeroform.luckydays.value = "Saturday & Sunday";}
   if (a1 == 1 ) {document.wwnumeroform.luckygems.value = "Ruby & Topaz";}
   if (a1 == 2 ) {document.wwnumeroform.luckygems.value = "Pearl";}
   if (a1 == 3 ) {document.wwnumeroform.luckygems.value = "Amethyst & Sapphire";}
   if (a1 == 4 ) {document.wwnumeroform.luckygems.value = "Blue Sapphire";}
   if (a1 == 5 ) {document.wwnumeroform.luckygems.value = "Emerald & Diamond";}
   if (a1 == 6 ) {document.wwnumeroform.luckygems.value = "Emerald & Blue Diamond";}
   if (a1 == 7 ) {document.wwnumeroform.luckygems.value = "Pearl & Diamond";}
   if (a1 == 8 ) {document.wwnumeroform.luckygems.value = "Blue Sapphire";}
   if (a1 == 9 ) {document.wwnumeroform.luckygems.value = "Ruby & Red coral";}
   if (a1 == 10 ) {document.wwnumeroform.luckygems.value = "Ruby & Topaz";}
   if (a1 == 11 ) {document.wwnumeroform.luckygems.value = "Pearl";}
   if (a1 == 12 ) {document.wwnumeroform.luckygems.value = "Amethyst & Sapphire";}
   if (a1 == 13 ) {document.wwnumeroform.luckygems.value = "Blue Sapphire";}
   if (a1 == 14 ) {document.wwnumeroform.luckygems.value = "Emerald & Diamond";}
   if (a1 == 15 ) {document.wwnumeroform.luckygems.value = "Emerald & Blue Diamond";}
   if (a1 == 16 ) {document.wwnumeroform.luckygems.value = "Pearl & Diamond";}
   if (a1 == 17 ) {document.wwnumeroform.luckygems.value = "Blue Sapphire";}
   if (a1 == 18 ) {document.wwnumeroform.luckygems.value = "Ruby & Red coral";}
   if (a1 == 19 ) {document.wwnumeroform.luckygems.value = "Ruby & Topaz";}
   if (a1 == 20 ) {document.wwnumeroform.luckygems.value = "Pearl";}
   if (a1 == 21 ) {document.wwnumeroform.luckygems.value = "Amethyst & Sapphire";}
   if (a1 == 22 ) {document.wwnumeroform.luckygems.value = "Blue Sapphire";}
   if (a1 == 23 ) {document.wwnumeroform.luckygems.value = "Emerald & Diamond";}
   if (a1 == 24 ) {document.wwnumeroform.luckygems.value = "Emerald & Blue Diamond";}
   if (a1 == 25 ) {document.wwnumeroform.luckygems.value = "Pearl & Diamond";}
   if (a1 == 26 ) {document.wwnumeroform.luckygems.value = "Blue Sapphire";}
   if (a1 == 27 ) {document.wwnumeroform.luckygems.value = "Ruby & Red coral";}
   if (a1 == 28 ) {document.wwnumeroform.luckygems.value = "Ruby & Topaz";}
   if (a1 == 29 ) {document.wwnumeroform.luckygems.value = "Pearl";}
   if (a1 == 30 ) {document.wwnumeroform.luckygems.value = "Amethyst & Sapphire";}
   if (a1 == 31 ) {document.wwnumeroform.luckygems.value = "Blue Sapphire";}
   if (a1 == "x") return true;
}

