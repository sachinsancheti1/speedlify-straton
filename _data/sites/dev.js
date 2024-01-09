module.exports = {
	name: "Development Site", // optional, falls back to object key
	description: "Straton Dev Site",
	skip: !process.env.CONTEXT,
	options: {
		freshChrome: "site",
		frequency: 1, // (in minutes)
	},
	urls: [
		"https://dev.stratongroup-02.pages.dev/blog/",
		"https://dev.stratongroup-02.pages.dev/aboutus.html",
		"https://dev.stratongroup-02.pages.dev/careers.html",
		"https://dev.stratongroup-02.pages.dev/clientele.html",
		"https://dev.stratongroup-02.pages.dev/faq-straton-products.html",
		"https://dev.stratongroup-02.pages.dev/thank-you.html",
		"https://dev.stratongroup-02.pages.dev/",
		"https://dev.stratongroup-02.pages.dev/contact-us.html",
		"https://dev.stratongroup-02.pages.dev/privacy-policy.html",
		"https://dev.stratongroup-02.pages.dev/interior-paneling-decorative-solutions.html",
		"https://dev.stratongroup-02.pages.dev/pvc-boards-plywood-replacement.html",
		"https://dev.stratongroup-02.pages.dev/toilet-and-washroom-cubicle-solutions.html",
		"https://dev.stratongroup-02.pages.dev/ventilated-facade-cladding-hpl.html",
		"https://dev.stratongroup-02.pages.dev/wpc-decking-cladding-louvers-pergola.html",
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