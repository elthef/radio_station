currentAudio = new Audio()
play_status = false;
count = 0;
stn_text = "";
function play_station(address){

	currentAudio.setAttribute("src",address);
	//currentAudio.setAttribute("src","https://playerservices.streamtheworld.com/api/livestream-redirect/CAPITAL958FMAAC.aac");
	//currentAudio.play();

	if (play_status == false){
		currentAudio.play();
		play_status = true
		count += 1;
	}
	else{
		count = 0;
	}
	//alert(status.text())
	// if (status)
	// {
	// 	audio.pause();
	// 	play_status = false;
	// }
	// else
	// {
	// 	audio.play();
	// 	play_status =true;
	// }
	//alert("You have click here "+ stn_text)
}

$(document).ready(function(){
	//$(".movie-image").mouseenter(function(){
	// 	var test = $(this).find(".play").show();
	//
	// 	//$(this).find("span").show()
	// 	//var test = $(this).attr('class');
	// 	//var test = $("span.name").text();
	// 	//var test = $(this).attr('name');y_
	// 	//var audio = $(this).find(".audio").show();
	//
	// 	var stn_text = test.text();
	// 	var play_status = false;
	// 	//string url;
	// 	if (stn_text == '95.8')
	// 	{
	// 		//audio.stop();
	// 		//url="https://playerservices.streamtheworld.com/api/livestream-redirect/CAPITAL958FMAAC.aac"
	// 		currentAudio.setAttribute("src","https://playerservices.streamtheworld.com/api/livestream-redirect/CAPITAL958FMAAC.aac");
	// 		status = currentAudio.play();
	// 		//alert(status.text())
	// 		// if (status)
	// 		// {
	// 		// 	audio.pause();
	// 		// 	play_status = false;
	// 		// }
	// 		// else
	// 		// {
	// 		// 	audio.play();
	// 		// 	play_status =true;
	// 		// }
	// 		//alert("You have click here "+ stn_text)
	// 	}
	//
	// },
	// 	function()
	// 	{
	// 		$(this).find(".play").hide();
	// 	}
	//
	// );
	// $(".movie-image").mouseleave(function(){
	// 	//alert("tttt");
	// 	currentAudio.stop();
	//});
	$(".movie-image").hover(function(){
		var test = $(this).find(".play").show();
		stn_text = test.text();
		//$(this).find("span").show()
		//var test = $(this).attr('class');
		//var test = $("span.name").text();
		//var test = $(this).attr('name');y_
		//var audio = $(this).find(".audio").show();



		//string url;
		if (stn_text == '95.8')
		{
			play_station("https://playerservices.streamtheworld.com/api/livestream-redirect/CAPITAL958FMAAC.aac");
			//audio.stop();
			//url="https://playerservices.streamtheworld.com/api/livestream-redirect/CAPITAL958FMAAC.aac"
			// currentAudio.setAttribute("src","https://playerservices.streamtheworld.com/api/livestream-redirect/CAPITAL958FMAAC.aac");
			// //currentAudio.play();
			//
			// if (play_status == false){
			// 	currentAudio.play();
			// 	play_status = true
			// 	count += 1;
			// }
			// else{
			// 	count = 0;
			// }
			// //alert(status.text())
			// // if (status)
			// // {
			// // 	audio.pause();
			// // 	play_status = false;
			// // }
			// // else
			// // {
			// // 	audio.play();
			// // 	play_status =true;
			// // }
			// //alert("You have click here "+ stn_text)
		}
		else{
			if (stn_text == 'Family Life Radio')
			{
				// date_tdy = date.today()
				// yr_shrt= date_tdy.year % 1000
				// console.log("%s %s %s", (date_tdy.year,date_tdy.month,date_tdy.day));
				// day = f"{date_tdy.day:02d}"
				// month = f"{date_tdy.month:02}"
				// yr_full = f"{date_tdy.year:02}"
				// int(day,month,yr_shrt)
				// file = 'odb-'+ str(month) + "-" + str(day)+'-'+str(yr_shrt)+".mp3"
				// url="https://dzxuyknqkmi1e.cloudfront.net/odb/" + str(yr_full) +"/" + str(month) + "/" + file
				play_station("http://icecast.streammyflr.org:8080/FLRstream");
			}
		}
	},
	function()
	{
		$(this).find(".play").hide();
		if (play_status == true & count == 0) {
			currentAudio.pause();
			currentAudio.removeAttribute("src");
			play_status = false;
		}

	});


	$(".blink").focus(function() {
            if(this.title==this.value) {
                this.value = '';
            }
        })
        .blur(function(){
            if(this.value=='') {
                this.value = this.title;                    
			}
		});
});
