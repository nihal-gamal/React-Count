import {useState}from'react';



import Counter from './../../components/counter';
import DecreamentButton from './../../components/decreamentButton';
import IncreamentButton from './../../components/increamentButton';

function Count() {
    const [counter, setCounter] = useState(0)
    const increament=()=>{
        setCounter(counter+1)
        }
        const decrement=()=>{
        setCounter(counter-1)
        }
        return (
        <div className="App text-center w-25 card mx-auto mt-5 pt-5" >
            <Counter counter={counter} className="pt-5" ></Counter>
            <div className='mx-auto d-flex mt-3 w-25 justify-content-evenly'>
            <DecreamentButton decrement={decrement} ></DecreamentButton>
            <IncreamentButton increament={increament} ></IncreamentButton>
            </div>
            
        </div>
        );
}

export default Count;