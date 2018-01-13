$(function(){
			
			var $slogans = $("p.slogan").find("strong");
			var $holder = $("#holder");
			
			//set via JS so they're visible if JS disabled
			$slogans.parent().css({position : "absolute", top:"0px", left:"0px"});
			
			//settings
			var transitionTime = 0.4;
			var slogansDelayTime = 2;
			
			//internal
			var totalSlogans = $slogans.length;
			
			var oldSlogan = 0;
			var currentSlogan = -1;
			
			//initialize	
			switchSlogan();
			
			function switchSlogan(){
				
				oldSlogan = currentSlogan;
				
				if(currentSlogan < totalSlogans-1){
					currentSlogan ++
				} else {
					currentSlogan = 0;
				}
				
				TweenLite.to($slogans.eq(oldSlogan), transitionTime, {top:-20, alpha:0, rotationX: 90});
				TweenLite.fromTo($slogans.eq(currentSlogan), transitionTime, {top:20, alpha:0, rotationX: -90 }, {top:0, alpha:1, rotationX:0});
				
				TweenLite.delayedCall(slogansDelayTime, switchSlogan);
			}
			
		});