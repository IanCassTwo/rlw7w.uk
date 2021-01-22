for i in `ls *.jpg`; do convert -verbose "$i[x1080>]" -set filename:base "%[basename]" "converted/%[filename:base].jpg"; done
