import React,{useEffect,useState} from 'react';
import {useParams,useHistory} from 'react-router-dom';
import User from './../components/User';
function UserPage() {
    const [userData,setUserData]=useState()
    const { id } = useParams();
    /**
    * fetch Data
    */
  useEffect(() => {
    fetchData(id)
    }, [])

  const fetchData = async (id) =>{
    try{
      const res = await fetch(`https://60b4f24cfe923b0017c833c3.mockapi.io/test/${id}`);
      const data = await res.json()
      setUserData(data)
      return data;
    }catch{
      
    }
  }
    return (
        <div>
           <User user={userData}/>
        </div>
    )
}

export default UserPage;
