//your JS code here. If required.
inputText=document.getElementById('fname');
inputText.addEventListener('blur',()=>{
	inputText.value=inputText.value.toUpperCase();
        })