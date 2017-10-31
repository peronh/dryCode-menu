$(document).ready(function(){

		$("li").click(function(){

			var tabId = $(this).attr('data-tabId');

		$('#'+tabId).toggle(500);
			});

});