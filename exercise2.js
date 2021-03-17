const fs = require("fs");

// Save the string "Hello world!" in a file called "hello.txt" in
// the directory "/tmp" using the default encoding (utf8).
// This operation will be completed in background and the callback
// will be called when it is either done or failed.
fs.writeFile("test.html", "Hello!", function (err) {
	// If an error occurred, show it and return
	if (err) return console.error(err);
	// Successfully wrote to the file!
});
