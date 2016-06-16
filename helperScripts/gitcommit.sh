#!/bin/sh
#!/bin/bash
## commit
##./gitpull.sh
##cp gitclone.sh lexycode/helperScripts/gitclone.sh
##cp gitcommit.sh lexycode/helperScripts/gitcommit.sh
##cp gitpull.sh lexycode/helperScripts/gitpull.sh

#!/usr/bin/env bash
for i in *.sh; do
  date -r $i
  echo "$i" ##"$i"
done