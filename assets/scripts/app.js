const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Accenture",
				weight: 8.6
			}, {
				text: "SWE Virtual Experience",
				weight: 10
			}, {
				text: "Intro to Digital Currencies",
				weight: 12
			}, {
				text: "IBM",
				weight: 11
			}, {
				text: "Cognitive Class",
				weight: 4
			}, {
				text: "Udemy",
				weight: 7
			}, {
				text: "Responsive Web Design",
				weight: 3
			},{
				text: "Developer Program",
				weight: 9
			}, {
				text: "JPMorgan Chase & Co.",
				weight: 4
			}, {
				text: "University of Nicosia",
				weight: 8
			}, {
				text: "Data Science and Big Data",
				weight: 9
			}, {
				text: "Blockchain Essentials",
				weight: 7
			}, {
				text: "Web development and Angular JS",
				weight: 4
			}, {
				text: "freeCodeCamp",
				weight: 6
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; 
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Full-Stack Developer.", "love everything about code.", "also love to sing.", "solve problems."
			],
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
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
