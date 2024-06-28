


// highly customizable inputs ubtton.

export default function Input({type,value,onChange,label,min,max}){

        // these funtions retunr the right type of input based on the type prop
    function getInputType(type){

        if(type=="text") return  <input type={type} value={value} onChange={onChange}></input>;
        else if(type=="number") return <input min={min?min:0} max={max?max:100} type={type} value={value} onChange={onChange}></input>;

    }



    return <div>
        <label>{label}</label>
        {getInputType(type)}
    </div>
}

