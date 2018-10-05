(function StopWatch(){

    let startTimeTxt = document.getElementById('startTimeTxt');
    let runningTimeTxt = document.getElementById('runningTimeTxt');
    let totalTimeTxt = document.getElementById('totalTimeTxt');
    let breakTimeTxt = document.getElementById('breakTime');
    let breakRunTimeTxt = document.getElementById('breakRunTime');
    totalTimeTxt.innerHTML = '0:00:0';
    runningTimeTxt.innerHTML = '0:00:0';
    breakRunTimeTxt.innerHTML = '0:00:0';
    let startB = document.getElementById('startB').addEventListener('click',function(e){
        e.preventDefault();
        start_End_runing(true);    
    });
    let endB = document.getElementById('endB').addEventListener('click',function(e){
        e.preventDefault();
        start_End_runing(false);  
    
    });
    
    let reset = document.getElementById('resetB').addEventListener('click', function(e){
        e.preventDefault();
        start_End_runing(false);
        reset_watch();
        
    });

    let startTime, totalTime, runner, count, watchOn = false, Startdate,  secounds = 0, minutes= 0, hours = 0, totalBreaks = 0;
    
    let breakTime = {
        s : 0,
        m : 0,
        h : 0
    }

    this.setDate = function(){
        let currentDateTime = new Date();
        let s = currentDateTime.getSeconds();
        let m = currentDateTime.getMinutes();
        let h = currentDateTime.getHours();
        if(secounds < 0.10) 
        Startdate = `${h}:${m}:${s}`;
    }


    this.start_End_runing = function(onOff){
        if(onOff === true){
            if(watchOn === true){
            throw  new Error("Stop Watch Is Running!");
            return;
        }
        this.run_watch();
        }else if(onOff === false){
            this.stop_watch();
        }
    }

    this.run_watch = function(){
        if(breakTime.s > 1)
        breakTimeTxt.innerHTML = totalBreaks;
        else
        breakTimeTxt.innerHTML = ' None';
        this.setDate();
            watchOn = true;
            startTimeTxt.innerHTML = Startdate;
            this.runner = setInterval(function(){
                
                secounds += 0.10;
                if(secounds > 59){
                    minutes++;
                    secounds = 0;
                }
                if(minutes === 59 && secounds === 59)
                    hours++; 
                runningTimeTxt.innerHTML = `${hours}:${minutes > 10 ? '':'0'}${minutes}:${secounds.toFixed(2)}`;
                totalTime = `${hours}:${minutes > 10 ? '':'0'}${minutes}:${secounds.toFixed(2)}`;
            },100)
    }

    this.stop_watch = function(){
        clearInterval(this.runner);
            this.countBreakTime();
            totalTimeTxt.innerHTML = totalTime;
            if(breakTime.s > 1)
            breakTimeTxt.innerHTML = totalBreaks;
            else
            breakTimeTxt.innerHTML = ' None';
            watchOn = false;
    }

    this.countBreakTime = function(){
        
        
        if(!watchOn === false ){
            let gui_sec = 0
            let gui_min = 0
            let gui_hou = 0
            this.count = setInterval(function(){
                console.log(gui_min);
                
            gui_sec += 0.10; 
            breakTime.s += 0.10 ;
            if(breakTime.s > 59){
                gui_min++
                breakTime.m++;
                breakTime.s = 0;
            }
            if(breakTime.m === 59 && breakTime.s === 59){
                breakTime.h++; 
                gui_hou++;
            }
            if(watchOn === true){
                clearInterval(this.count);
            }
            totalBreaks = `${breakTime.h}:${breakTime.m}:${breakTime.s.toFixed(2)}`;
            breakRunTimeTxt.innerHTML = `${gui_hou}:${gui_min}:${gui_sec.toFixed(2)}`;
        },100);
    }
        
    }

    this.reset_watch = function(){
        clearInterval(this.runner);
        clearInterval(this.count);
        breakTime.s = 0;
        breakTime.m = 0;
        breakTime.h = 0;
        secounds = 0;
        totalTime = null;
        totalBreaks = '';
        startTimeTxt.innerHTML = '';
        totalTimeTxt.innerHTML = '0:00:0';
        runningTimeTxt.innerHTML = '0:00:0';
        breakRunTimeTxt.innerHTML = '0:00:0';
        breakTimeTxt.innerHTML = '';
    }

    Object.defineProperty(
    this, 'Startdate',
     this, 'watchOn', this, 'startTimeTxt',
      this, 'secounds', this, 'totalTimeTxt',
      this, 'runningTimeTxt',this, 'miliSeconds',
      this, 'minutes', this, 'hours', this, 'totaltime',
      this, 'totalBreaks',this, 'breakTimeTxt',
      this, 'breakRunTimeTxt', this, 'count',{
        get: function(){
            return count;
        },

        get: function(){
            return breakRunTimeTxt;
        },

        get: function(){
            return breakTimeTxt;
        },

        get: function(){
            return totalBreaks;
        },

        get: function(){
            return totaltime;
        },

        get: function(){
            return secounds;
        },

        get: function(){
            return minutes;
        },

        get: function(){
            return hours;
        },

        get: function(){
            return runningTimeTxt;
        },

        get: function(){
            return totalTimeTxt;
        },


        set: function(){
            return secounds;
        },

        get: function(){
            return startTimeTxt;
        },

        set: function(){
            return startTimeTxt;
        },

        get: function(){
            return Startdate;
        },
        
        set: function(){
            return Startdate;
        },
        

        get: function(){
            return watchOn;
        },
})

})();