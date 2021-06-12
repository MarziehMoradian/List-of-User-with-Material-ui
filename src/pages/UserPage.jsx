import React,{useEffect,useState} from 'react';
import {useParams,useHistory} from 'react-router-dom';
import User from './../components/User';
import WithLoading from './../components/Loading';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
function UserPage() {
    const [userData,setUserData]=useState();
    const [loading,setLoading]=useState(true);
    const ListWithLoading = WithLoading(User);
  
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
      setLoading(false);
      return data;
    }catch(err){
      NotificationManager.error('request failed!')
    }
  }
    return (
        <div>
          <NotificationContainer/>
          <ListWithLoading isLoading={loading} user={userData}  />
        </div>
    )
}

export default UserPage;
