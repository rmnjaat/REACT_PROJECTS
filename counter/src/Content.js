import {React ,useState,useEffect} from 'react';
import './content.css';

const Content = () => {


    const [val,setval]=useState(11);
    
    useEffect(()=>{
        document.title= `(${val}) Notification`; 
    });

    return (

        
        <>

    

            <div className='button-container'>
                <div className='Number'>
                    <p>{val}</p>
                </div>

            

                <div className='container'>

                    <div className="buttons">
                        <button onClick={()=>setval(val+1)} >
                            INCR
                        </button>
                    </div>
                    <div className="buttons">
                        <button onClick={(val>=0)? ()=>setval(val-1):setval(0)}>
                            DEC
                        </button>
                    </div>

                </div>
            </div>

        </>


    )

}

export default Content;