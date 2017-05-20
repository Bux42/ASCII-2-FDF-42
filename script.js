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
    saveTextAsFile();
}

function saveTextAsFile() {
  var textToWrite = document.getElementById('comment fart').value;
  var textFileAsBlob = new Blob([ textToWrite ], { type: 'text/plain' });
  var fileNameToSaveAs = "map.fdf";

  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";
  if (window.webkitURL != null) {
    // Chrome allows the link to be clicked without actually adding it to the DOM.
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
  } else {
    // Firefox requires the link to be added to the DOM before it can be clicked.
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
  }

  downloadLink.click();
}