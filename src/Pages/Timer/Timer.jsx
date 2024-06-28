import { useState,useEffect } from "react"
import Input from "../../Components/Inputs/Input";
import TimerView from "./TimerView";

export default function Timer(){

    const[hours,setHours]=useState(0);
    const[minutes,setMinutes]=useState(0);
    const[seconds,setSeconds]=useState(0);

    const[timerActive,setTimerStatus]=useState(false);

    let  timerId=null;

    // either we have 3 states for hours minutes and seconds or we just hhave two?

    function handlehoursInput(e){
        setHours(e.target.value);
    }
    function handleMinutesInput(e){
        setMinutes(e.target.value);
    }
    function handleSecondsInput(e){
        setSeconds(e.target.value);
    }

     function startTimer(){
        if(hours==0 && minutes==0 && seconds==0) return;
        
        setTimerStatus(true);

        timerId=setInterval(()=>{
            if(seconds==0 && minutes==0 && hours==0){
                console.log(timerId);
                cancelTimer();
            }else if(minutes==0 && seconds==0){
                setHours(hours-1);
                setMinutes(59);
                setSeconds(59);
            }else if(seconds==0){
                setMinutes(minutes-1);
                setSeconds(59);
            }else{
                setSeconds(prev=>prev-1);
            }
          

        },1000)
        
    }

   
   


    function cancelTimer(){
        if(timerId!=null)clearInterval(timerId)

        setTimerStatus(false);
    }


    return <div>
            {!timerActive ? <div style={{display:"flex",flexDirection:"row", alignContent:"center"}}>
            <Input type="number" label="hours" value={hours} min={1} max={24} onChange={handlehoursInput}></Input>
            <Input type="number" label="minutes" value={minutes} min={1} max={60} onChange={handleMinutesInput}></Input>
            <Input type="number" label="seconds" value={seconds} min={1} max={60} onChange={handleSecondsInput}></Input>

            </div>:<TimerView hours={hours} minutes={minutes} seconds={seconds}/>}
          

            {!timerActive?<button onClick={startTimer}>Start Timer</button>:<button onClick={cancelTimer}>Cancel Timer</button>}


        </div>


    






}