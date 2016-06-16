## chmod +x gitpull.sh gitcommit.sh gitclone.sh
## origin	https://github.com/lexybunnyy/lexycode.git
## origin	https://github.com/lexybunnyy/lexythesis.git
## origin	git@nyilas.net:adogyalu 
## origin	git@nyilas.net:lexybunnyy
## git clone git@ideapp.hu:adogyalu
cd adogyalu
git pull
cd ../lexybunnyy
git pull
cd ../lexycode
git pull
cd ../lexythesis
git pull
cd ../wedding
git pull
cd ..
echo updates_done

