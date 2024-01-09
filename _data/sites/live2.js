module.exports = {
	name: "Live Site 2", // optional, falls back to object key
	description: "Straton Live Site 2",
	skip: !process.env.CONTEXT,
	options: {
		freshChrome: "site",
		frequency: 60, // (in minutes)
	},
	urls: [
		"https://www.stratongroup.com/contact-us.html",
		"https://www.stratongroup.com/privacy-policy.html",
		"https://www.stratongroup.com/interior-paneling-decorative-solutions.html",
		"https://www.stratongroup.com/pvc-boards-plywood-replacement.html",
		"https://www.stratongroup.com/toilet-and-washroom-cubicle-solutions.html",
		"https://www.stratongroup.com/ventilated-facade-cladding-hpl.html",
		"https://www.stratongroup.com/wpc-decking-cladding-louvers-pergola.html"
	]
};