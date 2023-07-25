setInterval(() =>{
    d = new Date();
    time_hour= d.getHours();
    time_min= d.getMinutes();
    time_sec= d.getSeconds();

    rot_h=time_hour*30+time_min*0.5;
    rot_m=time_min*6;
    rot_s=time_sec*6;

    hour.style.transform=`rotate(${rot_h}deg)`;
    minute.style.transform=`rotate(${rot_m}deg)`;
    second.style.transform=`rotate(${rot_s}deg)`;
},1000);