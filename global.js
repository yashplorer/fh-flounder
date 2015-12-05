function getText(process, path){
	var txt = '';
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
		process(xmlhttp.response);
	};
	xmlhttp.open("GET", path, true);
	xmlhttp.send();
}

function toTitleCase(str){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function imgError(image) {
	image.remove();
}