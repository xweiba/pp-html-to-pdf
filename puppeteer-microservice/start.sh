#!/bin/bash
#######################
# created by code on 2020/06/08 16:44:35
#######################
function setVars(){
       serviceName=puppeteer-microservice
       basepath=/home/icampus3.0
       servHome=${basepath}/pkgs/${serviceName}
       start=${servHome}/start.sh   
       log=${basepath}/logs/${serviceName}.log 
       #npm=/usr/local/n/versions/node/14.18.1/bin/npm
       npm=npm
       option="run start"
}
function start(){
       cd $servHome
       sh stop.sh
       echo -e "  Start to start up ${serviceName} : "

       echo -e "${npm} ${option}"
       ${npm} ${option} > $log 2>&1 & 

       echo $! > pid

       if [[ -z $(cat pid) ]]; then
           echo -e "  Failed to start up ${serviceName}"

           return 1
       else 
           echo -e "  Successful to start up ${serviceName}"

           return 0
       fi   
}

setVars
start

      
