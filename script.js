function convert() {
	document.getElementById("comment fart").value = '';
    var text = document.getElementById("comment asciitext").value;
    var i = 0;
    var one = document.getElementById("comment one").value + ' ';
    var two = document.getElementById("comment two").value + ' ';
    var three = document.getElementById("comment three").value + ' ';
    while (text[i])
    {
    	if (text[i] == ' ')
    		document.getElementById("comment fart").value = document.getElementById("comment fart").value + one;
    	if (text[i] == ':')
    		document.getElementById("comment fart").value = document.getElementById("comment fart").value + three;
    	if (text[i] == '\n')
    		document.getElementById("comment fart").value = document.getElementById("comment fart").value + '\n';
    	if (text[i] != ' ' && text[i] != ':' && text[i] != '\n')
    		document.getElementById("comment fart").value = document.getElementById("comment fart").value + two;
    	i++;
    }
}