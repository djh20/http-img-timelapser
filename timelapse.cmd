@echo off
ffmpeg -framerate 1/0.1 -i frames/frame%%d.jpg -c:v libx264 -r 10 -pix_fmt yuv420p timelapse.mp4
pause