$(document).ready(function() {


	$.get("/api/studio", {}, function (result) {
		console.log(result);
		$("#studio1pic").attr("src",result[0].photo_url);
		$("#studio1name").html(result[0].name);

		$("#studio2pic").attr("src",result[0].photo_url);
		$("#studio2name").html(result[1].name);

		$("#studio3pic").attr("src",result[0].photo_url);
		$("#studio3name").html(result[2].name);

		$("#studio4pic").attr("src",result[0].photo_url);
		$("#studio4name").html(result[3].name);

		$("#studio5pic").attr("src",result[0].photo_url);
		$("#studio5name").html(result[4].name);

		$("#studio6pic").attr("src",result[0].photo_url);
		$("#studio6name").html(result[5].name);

		$("#studio7pic").attr("src",result[0].photo_url);
		$("#studio7name").html(result[6].name);

		$("#studio8pic").attr("src",result[0].photo_url);
		$("#studio8name").html(result[7].name);
	}); // End get /api/signin


}); // End $(document).ready