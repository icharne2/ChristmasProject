function date(){
        var dzis = new Date();
        var czas = dzis.toLocaleTimeString();
        
        var format = new Intl.DateTimeFormat( "pl", {
            day: "numeric",
            month: "numeric",
            year: "numeric", } );
        
        var data = format.format(dzis);
        
        document.getElementById("czas").innerHTML = data + ", " + czas;
    }

    setInterval("date()",1000);