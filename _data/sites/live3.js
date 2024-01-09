module.exports = {
	name: "Live Site 3", // optional, falls back to object key
	description: "Straton Live Site 3",
	skip: !process.env.CONTEXT,
	options: {
		freshChrome: "site",
		frequency: 1, // (in minutes)
	},
	urls: [
		"https://www.stratongroup.com/blog/things-you-should-know-before-building-exterior-wall-cladding.html",
		"https://www.stratongroup.com/blog/future-of-modern-modular-homes-with-wpc-cladding.html",
		"https://www.stratongroup.com/blog/why-the-wpc-board-is-safe-for-your-interior-designing.html",
		"https://www.stratongroup.com/wpc-products/wpc-floor-decking-and-cladding/",
		"https://www.stratongroup.com/wpc-products/wpc-wall-cladding-fluted-panels/",
		"https://www.stratongroup.com/wpc-products/wpc-sunshade-louvers-ceilings-partitions/",
		"https://www.stratongroup.com/wpc-products/wpc-pergola-patio-gazebo-shades/",
		"https://www.stratongroup.com/wpc-products/wpc-fascia-strips-partitions-fences/",
		"https://www.stratongroup.com/404.html"
	]
};