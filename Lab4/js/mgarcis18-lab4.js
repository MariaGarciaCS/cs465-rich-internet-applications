// Section 1 ///////////////////////////////////////////////////
var sec1_input = document.getElementById('sec1-input');
var sec1_btn = document.getElementById('sec1-btn1')

sec1_btn.addEventListener("click", function(){
  var sec1_input_txt = sec1_input.value;
  console.log(`Section 1 input: ${sec1_input_txt}`);

  if(sec1_input_txt === ""){
    alert("No alert text has been entered!")
  }else{
    alert(sec1_input_txt);
  }

  sec1_input.value = "";
});

// Section 2 ///////////////////////////////////////////////////
/*

Change the Headline text to your name.
Change the green box to a grey, #888888, box that is 100% wide and 20px tall.
Change the styles on the paragraph of text so it is bold, italic, and 12px in size.
Change the B&W hamburger icon to the color one provided, change the alt tag to 'Color Hamburger Icon', change the size of the icon so it is only 100px wide.
Change the Google link to a link to the Illinois Tech website, www.iit.edu, and also change the text of the link to 'Illinois Tech Website'.
Change the styling on the link so that it is red, #cc0000, and underlined.
*/ 

var sec2_btn = document.getElementById('sec2-btn1');
sec2_btn.addEventListener("click", function(){
  console.log("Section 2 button clicked");
  var sec2_area = document.getElementById('sec2-contentarea');
  var headline = sec2_area.getElementsByTagName('h3')[0];
  headline.innerHTML = "Maria Garcia";

});

// Section 3 ///////////////////////////////////////////////////
// Section 4 ///////////////////////////////////////////////////
// Section 5 ///////////////////////////////////////////////////
// Section 6 ///////////////////////////////////////////////////