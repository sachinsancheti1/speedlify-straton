module.exports = {
	name: "Development Site 3", // optional, falls back to object key
	description: "Straton Dev Site 3",
	skip: !process.env.CONTEXT,
	options: {
		freshChrome: "site",
		frequency: 1, // (in minutes)
	},
	urls: [
		"https://dev.stratongroup-02.pages.dev/blog/things-you-should-know-before-building-exterior-wall-cladding.html",
		"https://dev.stratongroup-02.pages.dev/blog/future-of-modern-modular-homes-with-wpc-cladding.html",
		"https://dev.stratongroup-02.pages.dev/blog/why-the-wpc-board-is-safe-for-your-interior-designing.html",
		"https://dev.stratongroup-02.pages.dev/wpc-products/wpc-floor-decking-and-cladding/",
		"https://dev.stratongroup-02.pages.dev/wpc-products/wpc-wall-cladding-fluted-panels/",
		"https://dev.stratongroup-02.pages.dev/wpc-products/wpc-sunshade-louvers-ceilings-partitions/",
		"https://dev.stratongroup-02.pages.dev/wpc-products/wpc-pergola-patio-gazebo-shades/",
		"https://dev.stratongroup-02.pages.dev/wpc-products/wpc-fascia-strips-partitions-fences/",
		"https://dev.stratongroup-02.pages.dev/404.html"
	]
};