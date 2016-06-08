var APPID = "89c39e8b9b8a27d84fd9441a181668fb";
	
	$('#send').click(function() {
		var cityname = $('#cityname').val();
		

		$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + cityname + '&APPID=' + APPID, function(data) {
			$('#selectedcity').html(data.name);
			$('#clouddescr').html(data.weather[0].description);
			$('#cloudimg').attr('src', 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png');
			$('#temp').html(data.list.main.temp - 273.15);
			$('#pressure').html(data.list.main.pressure);
			$('#humidity').html(data.list.main.humidity);
			$('#windspeed').html(data.list.wind.speed);
		}).done(function() {
			console.log('Request completed successfully');
		}).fail(function() {
			console.log('Request is failure');
		});
	});
});
