    function zliczenie(i){
        var ile = document.getElementById("k"+i).value;

        if(!ile){
            alert("Nie podano ilośći.");
        }else if(ile < 0)
            alert("Podano ujemną ilość sztuk.");
        else if(i == 1)
            document.getElementById("suma"+i).innerHTML = ile*10;
        else if(i == 2) 
            document.getElementById("suma"+i).innerHTML = ile*12;
        else if(i == 3) 
            document.getElementById("suma"+i).innerHTML = ile*14;

        document.getElementById("suma"+i).style.fontWeight = "bold";
    }

    function sum(){

        var suma = 0;
        var a = 0;

        for(var j=1; j<=3; j++){
            zliczenie(j);
            a = parseInt(document.getElementById("suma"+j).innerHTML);
            suma = suma + a;
        }

        document.getElementById("suma").innerHTML = suma;
        document.getElementById("suma").style.fontWeight = "bold";
    }
    
    function res(){
        document.getElementById("suma").innerHTML = "__";
        document.getElementById("suma1").innerHTML = "__";
        document.getElementById("suma2").innerHTML = "__";
        document.getElementById("suma3").innerHTML = "__";
    }
