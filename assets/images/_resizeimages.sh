#!/bin/bash
for i in `ls _pristine/*.jpg`
do 
	f=`basename -s .jpg $i`

	if [ ! -f "resized/$f.jpg" ]; then
		convert -verbose "$i[x1080>]" -set filename:base "%[basename]" "resized/%[filename:base].jpg"&
	fi

	if [ ! -f "resized/$f.webp" ]; then
		convert -verbose "$i[x1080>]" -set filename:base "%[basename]" "resized/%[filename:base].webp"&
	fi

	if [ ! -f "resized/$f.avif" ]; then
		convert -verbose -quality 62 "$i[x1080>]" -set filename:base "%[basename]" "resized/%[filename:base].avif"&
	fi
	wait
done

for i in `ls _pristine/*.png`
do 
	f=`basename -s .png $i`

	if [ ! -f "resized/$f.png" ]; then
		convert -verbose "$i[x1080>]" -set filename:base "%[basename]" "resized/%[filename:base].png"&
	fi

	if [ ! -f "resized/$f.webp" ]; then
		convert -verbose "$i[x1080>]" -set filename:base "%[basename]" "resized/%[filename:base].webp"&
	fi

	if [ ! -f "resized/$f.avif" ]; then
		convert -verbose -quality 62 "$i[x1080>]" -set filename:base "%[basename]" "resized/%[filename:base].avif"&
	fi
	wait
done

