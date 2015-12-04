(function runs() {
	console.log("let's do this");
	getText(readSection, "info.csv");
})();

function readSection(inp){

	var arr = inp.split('\n');

	for(i in arr){
		var doc = (arr[i]).split(",");
		for(j in doc) doc[j] = doc[j].replace(";", ",");

		var f = "";
		if(!(((document.getElementById("article-list")).innerHTML).includes(toTitleCase(doc[0])))){
			f += "<li>"
				f += "<span>"
					f += "<a href='" + doc[3] + "/index.html'>";
					f += toTitleCase(doc[0]); 
				f += "</a></span>";
				f += "<div>"
					f += "<span> By " + (doc[1]).toUpperCase() + "</span>";
					f += "<span>" + doc[2] + "</span>";
				f += "</div>";
				f += "<img />";
			f += "</li>";
		}

		document.getElementById("article-list").innerHTML += f;
	}

	document.getElementById("section-head").innerHTML = (document.title).substring(3);
}