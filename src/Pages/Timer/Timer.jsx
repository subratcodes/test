import { useState,useEffect } from "react"
import Input from "../../Components/Inputs/Input";

export default function Timer(){

    const[hours,setHours]=useState(0);
    const[minutes,setMinutes]=useState(0);
    const[seconds,setSeconds]=useState(0);

    const[timerStatus,setTimerStatus]=useState(true);

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

     function handleTimerStatus(){
        setTimerStatus(false);
    }


    function cancelTimer(){
        setTimerStatus(false);
    }


    return <div>
      
            <div style={{display:"flex",flexDirection:"row", alignContent:"center"}}>
            <Input type="number" label="hours" value={hours} onChange={handlehoursInput}></Input>
            <Input type="number" label="minutes" value={minutes} onChange={handleMinutesInput}></Input>
            <Input type="number" label="seconds" value={seconds} onChange={handleSecondsInput}></Input>

            </div>

            {timerStatus?<button>Start Timer</button>:<button>Cancel Timer</button>}


        </div>


    






}