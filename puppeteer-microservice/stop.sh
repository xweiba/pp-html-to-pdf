#!/bin/bash
function stop(){
       serviceName=puppeteer-microservice
       local pid=$(ps aux|grep "puppeteer-microservice"|grep -v grep|awk '{print $2}' 2>>/dev/null)

       if [[ -n $pid ]]; then

            kill -9 $pid 2>>/dev/null

            if [[ $? -ne 0 ]]; then
                 echo -e "  Failed to stop service of ${serviceNam}"
                 return 1
            else 
                 echo -e "  Successful to stop service of ${serviceNam}"
                 return 0
            fi  
       fi      

}
stop

      
