module.exports = {
	name: "Development Site 2", // optional, falls back to object key
	description: "Straton Dev Site 2",
	skip: !process.env.CONTEXT,
	options: {
		freshChrome: "site",
		frequency: 60, // (in minutes)
	},
	urls: [
		"https://dev.stratongroup-02.pages.dev/contact-us.html",
		"https://dev.stratongroup-02.pages.dev/privacy-policy.html",
		"https://dev.stratongroup-02.pages.dev/interior-paneling-decorative-solutions.html",
		"https://dev.stratongroup-02.pages.dev/pvc-boards-plywood-replacement.html",
		"https://dev.stratongroup-02.pages.dev/toilet-and-washroom-cubicle-solutions.html",
		"https://dev.stratongroup-02.pages.dev/ventilated-facade-cladding-hpl.html",
		"https://dev.stratongroup-02.pages.dev/wpc-decking-cladding-louvers-pergola.html",
	]
};