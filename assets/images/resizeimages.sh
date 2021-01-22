for i in `ls _pristine/*.jpg`; do convert -verbose "$i[x1080>]" -set filename:base "%[basename]" "resized/%[filename:base].jpg"; done
