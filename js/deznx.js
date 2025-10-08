/*! HTML JS Functions v1.0 2016-09 | (c) deznx foundation - David Bey | agentbey.com */
/* Script for Mobile Menu */
$(document).ready(function() {
	$("#toggle").click(function() {
		$("#navbar").toggle();
		$('#toggle').toggleClass('on');
	});
});