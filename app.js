 setInterval(date,1000)
 function date(){
    var dayVal
     var body = document.getElementById('body').autofocus
         const today = new Date()
        var hour = today.getHours()
         var min = today.getMinutes()
         const day = today.getDay()
         var week = {
             0:'Sun',
             1:'Mon',
             2:'Tue',
             3:'Wed',
             4:'Thu',
             5:'Fri',
             6:'Sat',
         }
         
     Object.keys(week).map(item=>{
         if(item==day)
         dayVal=week[item]
         console.log(dayVal);
     })
        if(hour>12)
            hour = hour-12;
        if(min<10)
            min ='0'+min
         document.querySelector('.time').innerHTML = `${hour}:${min}`;
         document.querySelector('.day').innerHTML = dayVal;
 }



