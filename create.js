function f1(){
	document.getElementById("textarea1").style.fontWeight = "bold";
}

function f2() {
	document.getElementById("textarea1").style.fontStyle = "italic";
}

function f3() {
	document.getElementById("textarea1").style.textAlign = "left";
}

function f4() {
	document.getElementById("textarea1").style.textAlign = "center";
}

function f5() {
	document.getElementById("textarea1").style.textAlign = "right";
}

function f6() {
	document.getElementById("textarea1").style.textTransform = "uppercase";
}

function f7() {
	document.getElementById("textarea1").style.textTransform = "lowercase";
}

function f8() {
	document.getElementById("textarea1").style.textTransform = "capitalize";
}

function f9() {
	document.getElementById("textarea1").style.fontWeight = "normal";
	document.getElementById("textarea1").style.textAlign = "left";
	document.getElementById("textarea1").style.fontStyle = "normal";
	document.getElementById("textarea1").style.textTransform = "capitalize";
	document.getElementById("textarea1").value = " ";
}

function onClickHandler(ev) {
    var el = window._protected_reference = document.createElement("INPUT");
    el.type = "file";
    el.accept = "image/*";
    
    el.addEventListener('change', function(ev2) {
      
      if (el.files.length) {
        document.getElementById('out').src = URL.createObjectURL(el.files[0]);
      }
  
      new Promise(function(resolve) {
        setTimeout(function() { console.log(el.files); resolve(); }, 1000);
      })
      .then(function() {
        el = window._protected_reference = undefined;
      });
  
    });
  
    el.click();
}