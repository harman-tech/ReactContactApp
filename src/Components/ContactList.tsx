import React ,{useState,useEffect} from 'react';
import {UserList} from './UserList';
import axios from 'axios';
interface IProps{
    senddata:(user:UserList)=>void
}
interface IState{
    Users: UserList[] 
}

const ContactList:React.FC<IProps> =({senddata})=>{
    const [state, setstate] = useState<IState>({
        Users:[]
    })


    //to fetch data from publicgist url with use of axios and useeffect functionality
    useEffect(() => {
        const url = "https://gist.githubusercontent.com/harman-tech/cc883a9e8bb2ab6cb69060ef19f46ae5/raw/c8abca2726444bb3fc83bdea1f19654df9a3dda0/gistfile1.txt"
        axios.get(url).
        then((response)=>{
           setstate({
               Users:response.data
           })
        }).
        catch((error)=>{
            console.log(error)

        })
        
    }, [])

    // click event functionality on rows of table to display data

    const getdata = (user:UserList)=>{
        senddata(user)
    }
    return(
        <>
        <table className="table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">City</th>
    </tr>
  </thead>
  <tbody>
    {state.Users.length>0 && state.Users.map((user)=>{
        return (
            <tr key={user.id} onClick={getdata.bind(this,user)}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
    </tr>
        )
    })}
    
    
  </tbody>
</table>
        </>
    )
}
export default ContactList;