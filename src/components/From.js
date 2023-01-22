import React from 'react'
import currencies from './currencies'
const From = props =>{


function changeHandler(e){
    if(e.target.value === 'select currency'){
        return;
    }else{
        props.onChange(e.target.value)
    }
}

    return <React.Fragment>
        <div className='from'>
            <div className='from-form'>
                <form>
                    <label htmlFor='currency'>From:</label>
                    <select onChange={changeHandler} id="currency"  className="form-select" name="currency" aria-label="Default select example">
                    {currencies}
                    </select>

                    
                </form>
            </div>
        </div>
    </React.Fragment>
}

export default From;