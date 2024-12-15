function sin(){
    document.getElementById("in").value=(Math.sin(document.getElementById("in").value*(Math.PI/180)))
    document.getElementById("in").focus()
}
function cos(){
    document.getElementById("in").value=(Math.cos(document.getElementById("in").value*(Math.PI/180)))
    document.getElementById("in").focus()
}
function tan(){
    document.getElementById("in").value=(Math.tan(document.getElementById("in").value*(Math.PI/180)))
    document.getElementById("in").focus()
}
function result() {
    // Get the current expression from the input field
    let expression = document.getElementById('in').value;

    // Check if the expression is not empty
    if (expression.trim() === "") {
      document.getElementById('in').value = "Error: Empty Input";
      return;
    }

    try {
      // Use JavaScript's eval() function to evaluate the expression
      let result = eval(expression);
      // If the result is a number, update the input field with the result
      if (!isNaN(result) && result !== undefined && result !== null) {
        document.getElementById('in').value = result;
      } else {
        document.getElementById('in').value = "Error: Invalid Expression";
      }
    } catch (e) {
      // If the evaluation fails, show "Error"
      document.getElementById('in').value = "Error: Invalid Expression";
    }
    document.getElementById("in").focus()
  }
  function clear_(){
    document.getElementById('in').value=""
    document.getElementById("in").focus()
  }
  function fact(){
    let f=1
    if(0+(document.getElementById("in").value)<0){
        document.getElementById("in").value="NaN"
        return;
    }
    for(i=1;i<=document.getElementById("in").value;i++){
        f=f*i
    }
    document.getElementById("in").value=f
    document.getElementById("in").focus()
  }
  function sqrt(){
    document.getElementById("in").value=Math.sqrt(document.getElementById("in").value)
    document.getElementById("in").focus()
  }
  function cbrt(){
    document.getElementById("in").value=Math.cbrt(document.getElementById("in").value)
    document.getElementById("in").focus()
  }
  function ln(){
    document.getElementById("in").value=Math.log(document.getElementById("in").value)
    document.getElementById("in").focus()
  }
  function per(){
    document.getElementById("in").value=((document.getElementById("in").value)/100)+'*'
    document.getElementById("in").focus()
  }
  function exp(){
    document.getElementById("in").value=(document.getElementById("in").value)+'**'
    document.getElementById("in").focus()
  }
  function log(){
    document.getElementById("in").value=Math.log10(document.getElementById("in").value)
    document.getElementById("in").focus()
  }
document.addEventListener("keydown",function(event){
    let b=event.key
    if(b=="Escape") clear_();
    else if(b=="Enter"||b=="=") result();
    document.getElementById("in").focus()
})