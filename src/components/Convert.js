import React, {useRef, useState} from 'react'
import './Convert.css'



const Convert = props =>{
    const [error, setError] = useState(null)
    const amount = useRef();
    function convertHandler(e){
        e.preventDefault();
        if(amount.current.value){
            props.onConvert(amount.current.value)
            
        }else{
            setError('please input an amount in the field')
        }
        
    }

    const result = props.onConverted? `${props.onConverted} ${props.sideData2}` : `0.00 ${props.sideData2? props.sideData2 : ''}` ;
    return <React.Fragment>
        <div className='convert'>
        <form>
        <div className="input-group mb-3">
        <span className="input-group-text">{props.sideData}</span>
  <input type="number" onChange={ () => setError(null)} className="form-control amount-input" ref={amount} placeholder="Enter Amount" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button className="btn btn-outline-danger convert-btn" onClick={convertHandler}>Convert</button>
</div>
{error && <p className='error'>{error}</p>}
        </form>
        <div className='result'>{result}</div>
        </div>
    </React.Fragment>
}

export default Convert;