const axios = require("axios");

axios
	.get("https://www.google.com/")
	.then(function (response) {
		console.log(response.data);
	})
	.catch(function (error) {
		console.log(error);
	});
