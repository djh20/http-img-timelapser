const http = require('http');
const fs = require('fs');

const config = require("./config.json");

// Create the 'frames' directory and catch for errors:
// (likely due to the folder already existing)
try { fs.mkdirSync('frames') } catch {}

/**
 * Fetches data (jpg image) from the requested url and saves it to the frames directory.
 */
function takeSnapshot() {
  try {
    // Get array of frame files so we know what number to use next.
    const files = fs.readdirSync("frames");

    const file = fs.createWriteStream(`frames/frame${files.length}.jpg`);
    const request = http.get(config.url, function(response) {
      response.pipe(file);
    });
  } catch(err) {
    console.log(err);
  }
}

takeSnapshot();
setInterval(() => takeSnapshot(), config.interval * 1000) // Convert to ms.