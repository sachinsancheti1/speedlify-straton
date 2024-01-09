module.exports = {
	name: "Development Site 1", // optional, falls back to object key
	description: "Straton Dev Site 1",
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
		"https://dev.stratongroup-02.pages.dev/"
	]
};