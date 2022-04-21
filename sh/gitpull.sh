## origin	https://github.com/lexybunnyy/lexycode.git
## origin	https://github.com/lexybunnyy/lexythesis.git
## origin	git@nyilas.net:adogyalu 
## origin	git@nyilas.net:lexybunnyy
## git clone git@ideapp.hu:adogyalu
git clone git@nyilas.net:adogyalu
git clone git@nyilas.net:lexybunnyy 
git clone https://github.com/lexybunnyy/lexycode.git
git clone https://github.com/lexybunnyy/lexythesis.git
echo ......start adogyalu

cd adogyalu
git pull
git status
echo ...... start lexybunnyy

cd ../lexybunnyy
git pull
git status

echo ...... start lexycode
cd ../lexycode
git pull
git status

echo ...... start lexythesis 
cd ../lexythesis
git pull
git status
echo ......
echo updates_done



