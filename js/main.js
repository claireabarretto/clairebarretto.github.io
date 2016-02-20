/*var words = [
	{text: "HTML5", weight: 7},
	{text: "CSS3", weight: 6},
	{text: "SASS", weight: 5},
	{text: "Bootstrap", weight: 7},
	{text: "JavaScript", weight: 8},
	{text: "jQuery", weight: 9},
	{text: "Backbone.js", weight: 7},
	{text: "AJAX", weight: 8},
	{text: "XML", weight: 6},
	{text: "JSON", weight: 7},
	{text: "MySQL", weight: 4},
	{text: "Java", weight: 4},
	{text: "PHP", weight: 3},
	{text: "Git", weight: 7},
	{text: "SVN", weight: 5},
	{text: "JIRA", weight: 5},
	{text: "Elasticsearch", weight: 5},
	{text: "REST", weight: 6},
	{text: "Google Maps", weight: 5},
	{text: "d3.js", weight: 6},
];*/

$(function() {
	// Fetch wordcloud file and initialize cloud plugin
	$.get("files/wordcloud.txt").then(function(data) {
		var skills = data.split("\n");
		var words = skills.map(function(skill, i) {
			var word = skill.split(",");
			return {
				text: word[0], 
				weight: parseInt(word[1])
			}
		});
	});

	// Wordcloud initialization
	$("#wordcloud").jQCloud(words, {	
		autoResize: true
	});
});

// Smooth scroll to div
$(document).on("click", ".anchors a", function(evt) {
	evt.preventDefault();

	var parent = $(this).attr("href");
	$("html, body").animate({
		scrollTop: $(parent).offset().top - 60
	}, 500);
});

// Toggle between list/wordcloud for technical skills
$(document).on("click", "#toggle-skills", function() {
	var show = $(this).data("show");
	if (show === "list") {
		$("#wordcloud").fadeOut("slow", function() {
			$("#skills-list").removeClass("hide").fadeIn("slow");
		});
		$(this).data("show", "cloud");
		$(this).text("View as Cloud");
	} 
	else {
		$("#skills-list").fadeOut("slow", function() {
			$("#wordcloud").removeClass("hide").fadeIn("slow");
		});
		$(this).data("show", "list");
		$(this).text("View as List");
	}
});