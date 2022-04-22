function sum(){
    var j=0;  var r=0;
    for (let i= 1; i<22; i++) { 
        j=parseInt(document.getElementById("s" + i).value);
        r=parseInt(document.getElementById("x" + i).value);
        document.getElementById("y" + i).value=j-r;
    }
};
