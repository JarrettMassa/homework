$(document).ready(function() {


	$("#scrape").on("click", function(){

		$.get("/scrape", {}, function (result) {
		
      		alert(result.length);

            for (i = 0; i < result.length; i++){
            	$("#articles").after("<p>" + result[i].title + "<div class='article' article-id=" + i + "></p><button onclick='saveArticle(" + i + ")'>Save Article</button><button onclick='addNote(" + i + ")'>Add Note</button><br><br></div>");
            }
		}); // End get /scrape
	});

}); // End document.ready

function saveArticle(buttonNum){
		
	console.log(buttonNum);
}

function addNote(noteNum){

    var note = prompt("Add Note:");
    var noteObject = {
    	id: noteNum,
    	note: note
    	};

    $.post("/addNote", noteObject, function (result) {
    	
    	console.log(result);

    });

}

