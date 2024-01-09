module.exports = {
	name: "Live Site 1", // optional, falls back to object key
	description: "Straton Live Site 1",
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
		"https://www.stratongroup.com/"
	]
};