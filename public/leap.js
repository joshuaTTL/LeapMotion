var options = {enableGestures: true};


Leap.loop(options, function(frame){
	for(var i = 0; i < frame.hands.length; i++){
		var hand = frame.hands[i];
	}
});

controllers.on("gesture", function(gesture) {
	
	switch (gesture.type){
		case "cirlce":
			console.log("circle");
			break;
		case "keyTap":
			console.log("key tap");
			break;
		case "screenTap":
			console.log("screen tap");
			break;
		case "swipe":
			console.log("swipe gestrue");
			break;
	}
}