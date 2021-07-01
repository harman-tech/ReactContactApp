import React from 'react';
import {UserList} from './UserList';
interface IProps{
    receivedUser:UserList
}
interface IState{}

const ContactCard:React.FC<IProps> =(receivedUser)=>{
    
    return(
        
        <>
        <div className="card" >
            <img className="card-img-top" src="https://banner2.cleanpng.com/20180502/few/kisspng-businessperson-company-management-company-employee-slogan-5aea26d3d25842.8625466115252948038616.jpg" alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">Employee Details</h5>
               
                <ul>
                    <li>ID:-{receivedUser.receivedUser.id}</li>
                    <li>NAME:-{receivedUser.receivedUser.name}</li>
                    <li>EMAIL:-{receivedUser.receivedUser.email}</li>
                    <li>CITY:-{receivedUser.receivedUser.address.city}</li>
                </ul>
            </div>
        </div>
        </>
    )
}
export default ContactCard;