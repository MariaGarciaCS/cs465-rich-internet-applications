document.addEventListener('DOMContentLoaded', () => {
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
  var sec2_btn = document.getElementById('sec2-btn1');
  sec2_btn.addEventListener("click", function(){
    console.log("Section 2 button clicked");
    var sec2_area = document.getElementById('sec2-contentarea');

    var headline = sec2_area.getElementsByTagName('h3')[0];
    headline.innerHTML = "Maria Garcia";

    var box = document.getElementById('sec2-box');
    box.style.backgroundColor = "#888888";
    box.style.width = "100%";
    box.style.height = "20px";

    var paragraph = sec2_area.getElementsByTagName('p')[0];
    paragraph.style.fontStyle = "italic";
    paragraph.style.fontWeight = "bold";
    paragraph.style.fontSize = "12px";

    var hamburger = sec2_area.getElementsByTagName('img')[0];
    hamburger.src = "img/hamburger_color_icon.png";
    hamburger.alt = "Color Hamburger Icon";
    hamburger.width = "100";

    var link = sec2_area.getElementsByTagName('a')[0];
    link.href = "https://www.iit.edu/";
    link.innerHTML = "Illinois Tech Website";
    link.style.color = "#cc0000";
    link.style.textDecoration = "underline"

  });

  // Section 3 ///////////////////////////////////////////////////
  var sec3_convert = document.getElementById('sec3-btn1');
  var sec3_clear = document.getElementById('sec3-btn2');
  var sec3_input = document.getElementById('sec3-input');
  var sec3_results = document.getElementById('sec3-contentarea');

  function cToF(c){
    return c * 9 / 5 + 32;
  }

  sec3_convert.addEventListener('click', () =>{
    console.log("Section 3: Convert btn");
    var input = sec3_input.value;

    if(!(input === "")){
      if(!isNaN(input)){
        var newResult = document.createElement("p");
        newResult.innerHTML = `${input} degrees celsius is equal to ${cToF(input)} degrees fahrenheit`;
        sec3_results.appendChild(newResult);
        sec3_input.value = "";
      }
      else{
        alert("A non-numeric value was entered!");
      }
    }
    else{
      alert("No value has been entered!")
    }
  });

  sec3_clear.addEventListener('click', () =>{
    console.log("Section 3: Clear btn");

    while(sec3_results.firstChild){
      sec3_results.removeChild(sec3_results.firstChild);
    }
  });

  // Section 4 ///////////////////////////////////////////////////
  // Section 5 ///////////////////////////////////////////////////
  // Section 6 ///////////////////////////////////////////////////
})