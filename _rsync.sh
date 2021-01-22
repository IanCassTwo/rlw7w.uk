rsync -av --numeric-ids --delete --progress -e "ssh -T -o Compression=no -x" _site/ sshacs@icass2.rsync.upload.akamai.com:/350001/rlw7w/
