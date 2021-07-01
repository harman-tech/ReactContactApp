import React ,{useState,useEffect} from 'react';
import ContactCard from './ContactCard';
import ContactList from './ContactList';
import {UserList} from './UserList';

interface IProps{
    
}
interface IState{
    receivedUser:UserList
   
}

const Contactapp:React.FC<IProps> =({})=>{
    const [state, setstate] = useState({
        receivedUser:{} as UserList
    })

  //recieving data from child component thru function call
  let catchdata=(user:UserList)=>{
        setstate({
            receivedUser:user
        })
  }
   
       
    return(
        <>
        
<nav className="navbar navbar-light ">
  <a className="navbar-brand" href="#">
  <img src="https://img.icons8.com/cute-clipart/64/000000/apple-contacts.png"/>
    <span className="text-white span">ContactApp Powered By React</span>
  </a>
</nav>
        <section className="mt-5">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Contactapp</h1>
                        <p>Please click on the row below in the table to know each and every employee details</p>
                        
                    </div>
                    
                </div>
                <div className="row ">
                    <div className="col-8">
                        <ContactList senddata={catchdata}/>
                    </div>
                    <div className="col-4">
                        {Object.keys(state.receivedUser).length>0 && 
                         <ContactCard receivedUser={state.receivedUser}/>
                        }
                       
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Contactapp;