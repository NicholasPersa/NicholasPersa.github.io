$(document).ready(function(){

	var filter = window.location.hash.substring(1);
	
	$("#bannerTitle").html(filter);
	
	if(filter == "All Trainers") {
	
		for(i = 0; i < Trainers.length; i ++){
			
			if(Trainers[i].cosmetic == "Ace Trainer Female"){
				var iconType = "AceTrainer_F.png";
				var iconName = "Ace Trainer";
				var iconClass = "aceTrainer_F";
			}
			
			else if(Trainers[i].cosmetic == "Ace Trainer Male"){
				var iconType = "AceTrainer_M.png";
				var iconName = "Ace Trainer";
				var iconClass = "aceTrainer_M";
			}
			
			else if(Trainers[i].cosmetic == "Black Belt"){
				var iconType = "BlackBelt_M.png";
				var iconName = "Black Belt";
				var iconClass = "blackBelt_M";
			}
			
			else if(Trainers[i].cosmetic == "Camper"){
				var iconType = "Camper_M.png";
				var iconName = "Camper";
				var iconClass = "camper_M";
			}
			
			else if(Trainers[i].cosmetic == "Hiker"){
				var iconType = "Hiker_M.png";
				var iconName = "Hiker";
				var iconClass = "hiker_M";
			}
			
			else if(Trainers[i].cosmetic == "Pikachu"){
				var iconType = "Pikachu.png";
				var iconName = "Special Trainer";
				var iconClass = "pikachu";
			}
			
			else if(Trainers[i].cosmetic == "Wobbuffet"){
				var iconType = "Wobbuffet.png";
				var iconName = "Tricky Trainer";
				var iconClass = "wobbuffet";
			}
			
			else if(Trainers[i].cosmetic == "Flaaffy"){
				var iconType = "Flaaffy.png";
				var iconName = "Cute Trainer";
				var iconClass = "flaaffy";
			}
			
			else if(Trainers[i].cosmetic == "Swimmer Female"){
				var iconType = "Swimmer_F.png";
				var iconName = "Swimmer";
				var iconClass = "swimmer_F";
			}
			
			$("#containerTrainer").append('<div class="trainer" data-time=""><div class="team"><img  class="'+Trainers[i].team.toLowerCase()+'Logo" src="images/'+Trainers[i].team.toLowerCase()+'.png" /></div><h1>'+iconName+'</h1><div class="'+iconClass+'"><img src="images/playerIcons/'+iconType+'" /></div><h2>'+Trainers[i].handle+'</h2><div id="'+Trainers[i].handle+'" class="trainerInfo"></div></div>');
			
			$(".trainer").hide();
		}
	}
	else {
		for(i = 0; i < Trainers.length; i ++){
			
			if(Trainers[i].getDistrict() == filter){
				
				if(Trainers[i].cosmetic == "Ace Trainer Female"){
					var iconType = "AceTrainer_F.png";
					var iconName = "Ace Trainer";
					var iconClass = "aceTrainer_F";
				}
				
				else if(Trainers[i].cosmetic == "Ace Trainer Male"){
					var iconType = "AceTrainer_M.png";
					var iconName = "Ace Trainer";
					var iconClass = "aceTrainer_M";
				}
				
				else if(Trainers[i].cosmetic == "Black Belt"){
					var iconType = "BlackBelt_M.png";
					var iconName = "Black Belt";
					var iconClass = "blackBelt_M";
				}
				
				else if(Trainers[i].cosmetic == "Camper"){
					var iconType = "Camper_M.png";
					var iconName = "Camper";
					var iconClass = "camper_M";
				}
				
				else if(Trainers[i].cosmetic == "Hiker"){
					var iconType = "Hiker_M.png";
					var iconName = "Hiker";
					var iconClass = "hiker_M";
				}
				
				else if(Trainers[i].cosmetic == "Pikachu"){
					var iconType = "Pikachu.png";
					var iconName = "Special Trainer";
					var iconClass = "pikachu";
				}
				
				else if(Trainers[i].cosmetic == "Wobbuffet"){
					var iconType = "Wobbuffet.png";
					var iconName = "Tricky Trainer";
					var iconClass = "wobbuffet";
				}
				
				else if(Trainers[i].cosmetic == "Flaaffy"){
					var iconType = "Flaaffy.png";
					var iconName = "Cute Trainer";
					var iconClass = "flaaffy";
				}
				
				else if(Trainers[i].cosmetic == "Swimmer Female"){
					var iconType = "Swimmer_F.png";
					var iconName = "Swimmer";
					var iconClass = "swimmer_F";
				}
				
				$("#containerTrainer").append('<div class="trainer" data-time=""><div class="team"><img  class="'+Trainers[i].team.toLowerCase()+'Logo" src="images/'+Trainers[i].team.toLowerCase()+'.png" /></div><h1>'+iconName+'</h1><div class="'+iconClass+'"><img src="images/playerIcons/'+iconType+'" /></div><h2>'+Trainers[i].handle+'</h2><div id="'+Trainers[i].handle+'" class="trainerInfo"></div></div>');
				
				$(".trainer").hide();
				
			}
		}
	}
	
	var whiteSpace = $('#containerTrainer').html().replace(/\r|\n/gm, "");
	
	if(filter != "All Trainers"){
		
		for(i = 0; i < Trainers.length; i++){
			
			if(Trainers[i].getDistrict() == filter){
				
				var config = {
					"profile": {"screenName": Trainers[i].handle},
					"domId": Trainers[i].handle,
					"maxTweets": 1,
					"showImages": false,
					"enableLinks": true,
					"showUser": false,
					"showRetweet":true,
					"showInteraction":true
				};
				
				twitterFetcher.fetch(config);
			}
		}
	}
	else{
	
		for(i = 0; i < Trainers.length; i++){
			
			var config = {
				"profile": {"screenName": Trainers[i].handle},
				"domId": Trainers[i].handle,
				"maxTweets": 1,
				"showImages": false,
				"enableLinks": true,
				"showUser": false,
				"showRetweet":true,
				"showInteraction":true
			};
			
			twitterFetcher.fetch(config);
		}
	}
	
	// Polling for the sake of my intern tests
	var interval = setInterval(function() {
		if(document.readyState === 'complete') {
			clearInterval(interval);
			done();
		}
	}, 10);
	
	function done () {
		var html = $('#containerTrainer .trainer').sort(function(a,b) {
			if($(a).data('time') > $(b).data('time')){
				return -1;
			}
			if($(a).data('time') < $(b).data('time')){
				return 1;
			}
			return 0;
		});
		
		$("#containerTrainer").append(html);
		$(".trainer").fadeIn(1400);
		$("#loadingBall").fadeOut(1400);
	}
	
	$(document).mouseup(function(e){
	
		var menu = $('#aboutOverlay');
		if (!menu.is(e.target) // The target of the click isn't the container.
		&& menu.has(e.target).length === 0) // Nor a child element of the container
		{
			//menu.hide();
			$("#closeAbout").click();
		}
	});
	
	$("#burgerMenu").click(function(){
		menuShowing = true;
		document.getElementById("aboutOverlay").style.display = "inline-block";
		document.getElementById("siteNav").style.display = "none";
		document.getElementById("containerTrainer").style.display = "none";
	});
	$("#closeAbout").click(function(){
		menuShowing = false;
		document.getElementById("aboutOverlay").style.display = "none";
		document.getElementById("siteNav").style.display = "block";
		document.getElementById("containerTrainer").style.display = "block";
	});
	
	$("#backButton").click(function() {
		//window.history.back();
		window.location.href = "index.html";
	});
	
	$("#join").click(function(){
	
		$(this).toggleClass("clicked");
	
		if($(this).hasClass("clicked")){
		
			$("#menuInfo").html('<p>So you want a player icon and name?</p><p>Just tweet me using the button below which player icon you want, your team, and where you most frequently play: I will add your Twitter handle to the social nexus GoGreet and find or create a play region for you.</p> <p>By joining, you can participate in what other players are saying more easily and collaborate with friends to take on gyms.</p><p>Poke Go fan-site. Not officially affiliated with Pokemon Go or Niantic Labs.</p><a href="https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Flocalhost%3A4000%2FTrainerTemplate.html&amp;ref_src=twsrc%5Etfw&amp;screen_name=NicholasPersa&amp;tw_p=tweetbutton" target="_blank"><div id="tweetMe"><p>Tweet Me</p></div></a>');
			
			$("#join").html('<p>Return</p>');
			
		}
		else{
			$("#menuInfo").html('<p>Welcome to GoGreet: a social nexus designed for Pokemon Go. This is an unofficial fan-site authored by myself. I study and research digital media and have an interest in learning about collaborative social interactions.</p><p>I hope that this website helps players meet and plan in-game events. The site is being hosted on GitHub and I am using Twitter to create player profiles and send messages. In order to particiapte you will need to have or create a Twitter account. This site is experimental and its purpose is for educating myself on social interactions and web design.</p><p>If you have ideas about what would help develop this idea, get in touch with me on Twitter <a href="https://twitter.com/NicholasPersa" target="_blank">@NicholsaPersa</a></p><p>Poke Go fan-site. Not officially affiliated with Pokemon Go or Niantic Labs.</p>');
			
			$("#join").html('<p>Join?</p>');
		}
	});

});











