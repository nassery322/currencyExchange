import React from 'react'
import currencies from './currencies'
const To = props =>{

    function changeHandler(e){
        if(e.target.value === 'select currency'){
            return;
        }else{
            props.onChange(e.target.value)
        }    }
    return <React.Fragment>
        <div className='to'>
            <div className='to-form'>
                <form>
                    <label htmlFor='currency'>To:</label>
                    <select onChange={changeHandler} id="currency" className="form-select" name="currency" aria-label="Default select example">
                    {currencies}
                    </select>
                </form>
            </div>
        </div>
    </React.Fragment>
}

export default To;