const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Analyst",
				weight: 12.3
			}, {
				text: "Indie audiophile",
				weight: 8
			}, {
				text: "Optimizer",
				weight: 14
			}, {
				text: "Scientist",
				weight: 3
			}, {
				text: "Researcher",
				weight: 7
			}, {
				text: "Adventurer",
				weight: 10
			}, {
				text: "Formula1",
				weight: 9
			}, {
				text: "Golfer",
				weight: 7
			}, {
				text: "Team Player",
				weight: 6
			}, {
				text: "Gambler",
				weight: 4
			}, {
				text: "Problem Solver",
				weight: 10
			},  {
				text: "Foodie",
				weight: 5
			},
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 250});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Data Scientist.", "try to optimize capacity and efficiency.", "just recently broke 80 in golf.", "also love Formula 1, and Verstappen's racing style.", "solve problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 2,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
