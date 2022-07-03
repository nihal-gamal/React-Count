import {useState}from'react';



import Counter from './../../components/counter';
import DecreamentButton from './../../components/decreamentButton';
import IncreamentButton from './../../components/increamentButton';

function Count() {
    const [counter, setCounter] = useState(0)
    const [isSubmit, setSubmit] = useState(false);
    const increament=()=>{
        setCounter(counter+1)
        }
        const decrement=()=>{
        counter>0 && setCounter(counter-1)
        }
        return (
        <div className="App text-center w-25 card mx-auto mt-5 pt-5 pb-5 mb-5" >
        {
        isSubmit
        ?
        <h2>Thank you for your support!</h2>
        :<><div>
                <h4 className='mb-3'>Support Us!</h4>
                <Counter counter={counter} className="pt-5" ></Counter>
                <div className='mx-auto d-flex mt-3 w-25 justify-content-evenly'>
                <DecreamentButton decrement={decrement} ></DecreamentButton>
                <IncreamentButton increament={increament} ></IncreamentButton>
            </div>
            <button 
                className='btn btn-dark mx-auto mt-5 btn-sm'
                onClick={()=> setSubmit(true)}
                >Submit</button>
            </div>
            
            </>
            }

            
        </div>
        );
}

export default Count;