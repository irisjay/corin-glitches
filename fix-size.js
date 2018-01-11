document .addEventListener ('DOMContentLoaded', function () {
	[stream ()]
		.map (R .tap (function (widths) {
			widths (window .innerWidth);
			window .addEventListener ('resize', function () {
				widths (window .innerWidth);
			});
		}))
		.map (dropRepeats)
		.map (map (function (width) {
			return { width: width, height: window .innerHeight };
		}))
		.forEach (tap (function (size) {
			document .body .style .setProperty ('width', size .width + 'px', 'important');
			document .body .style .setProperty ('height', size .height + 'px', 'important');
		}));	
})
