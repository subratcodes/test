


export default function TimerView({hours,minutes,seconds}){

    {{console.log(hours,minutes,seconds)}}

    return <div style={{display:"flex",flexDirection:"row", alignContent:"between"}}>
        <p>
            {hours}
        </p>
        <p>
            {minutes}
        </p>
        <p>
            {seconds}
        </p>

    </div>


}