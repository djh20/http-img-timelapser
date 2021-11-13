# HTTP Image Timelapser
A simple Node.js application for grabbing images from a web server at a specified
interval. This should work with basically any version of Node.js because it only
uses built-in modules.

This also includes a .cmd batch file which uses ffmpeg to convert the images
into a video.

## Configuration
The application requires a config.json file. All valid config entries are listed below.
| Entry | Description |
| ----- | ----------- |
| url | The url of the image data (example: http://localhost/jpg). |
| interval | The interval to take photos, measured in seconds (example: 60). |