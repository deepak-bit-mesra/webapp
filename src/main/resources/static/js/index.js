console.log("webapp");


$(document).ready(function () {
	// executes when HTML-Document is loaded and DOM is ready
	console.log("document is ready");

	//  jQuery.ajax({
	//	  type:'POST',
	//	  url:"",
	//	  dataType:"",
	//	  data:{},
	//	  success:function(){},
	//	  error:function(){}
	//	  
	//  });

	$("#ajaxbtn").click(function () {
		console.log("clicked");
		debugger;
		jQuery.ajax({
			type: 'GET',
			url: "/list",
			success: function (response) {
				console.log("Success ", response);
				debugger;
				var string = '<ul class="carousel-indicators">\
								<li data-target="#demo" data-slide-to="0" class="active"></li>\
								<li data-target="#demo" data-slide-to="1"></li>\
								<li data-target="#demo" data-slide-to="2"></li>\
							</ul>\
							<div class="carousel-inner">\
								<div class="carousel-item active"><img src="images/Capture1.PNG" alt="Los Angeles"></div>\
								<div class="carousel-item"><img src="images/Capture2.PNG" alt="Chicago"></div>\
								<div class="carousel-item"><img src="images/Capture3.PNG" alt="New York"></div>\
							</div>';
				console.log(string);
				let carouselId = "#demo";
				let carousel = $(carouselId)[0];
				let carouselIndicators = $("#demo .carousel-indicators");
				let carouselInner = $("#demo .carousel-inner");
				// carousel.innerHTML = string;
				debugger;
				for (let i = 0; i < response.length; i++) {
					debugger;
					let li = $("<li />");
					li.attr({
							"data-target": carouselId,
							"data-slide-to": '' + i
						})
						.appendTo(carouselIndicators);
					if (i === 0)
						li.addClass("active");

					debugger;


					let corouselItem = $("<div>");
					corouselItem.attr({
						"class": "carousel-item"
					});
					if (i === 0)
						corouselItem.addClass("active");
					corouselItem.appendTo(carouselInner);

					let image = $("<img>");
					image.attr({
							src: "images/" + response[i],
							alt: "images/" + response[i]
						})
						.appendTo(corouselItem);


					debugger;

				}



			},
			error: function (response) {
				console.log("ERRor = ", response);
				debugger;
			}

		});
	});




});