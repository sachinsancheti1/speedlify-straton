module.exports = {
	name: "Live Site", // optional, falls back to object key
	description: "Straton Live Site",
	skip: !process.env.CONTEXT,
	options: {
		freshChrome: "site",
		frequency: 1, // (in minutes)
	},
	urls: [
		"https://www.stratongroup.com/blog/",
		"https://www.stratongroup.com/aboutus.html",
		"https://www.stratongroup.com/careers.html",
		"https://www.stratongroup.com/clientele.html",
		"https://www.stratongroup.com/faq-straton-products.html",
		"https://www.stratongroup.com/thank-you.html",
		"https://www.stratongroup.com/",
		"https://www.stratongroup.com/contact-us.html",
		"https://www.stratongroup.com/privacy-policy.html",
		"https://www.stratongroup.com/interior-paneling-decorative-solutions.html",
		"https://www.stratongroup.com/pvc-boards-plywood-replacement.html",
		"https://www.stratongroup.com/toilet-and-washroom-cubicle-solutions.html",
		"https://www.stratongroup.com/ventilated-facade-cladding-hpl.html",
		"https://www.stratongroup.com/wpc-decking-cladding-louvers-pergola.html",
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