
function getDate()
{
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var am_pm = '';
    //По надобности условие ниже повторить с minutes и hours
   
   
    if(seconds < 10)
    {
        seconds = '0' + seconds;
    };
      if(minutes < 10)
    {
        minutes = '0' + minutes;
    };
     if(month < 10)
    {
        month = '0' + ( month + 1 ) ;
    };
     if(day < 10)
    {
        day = '0' + day;
    };
    document.getElementById('clock').innerHTML =   month + '/' + 
    day + '/' + year + '   ' + hours + ':' + minutes + am_pm + ' ' };
setInterval(getDate, 10);