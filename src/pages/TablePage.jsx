import React,{useState,useEffect} from 'react';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Table from './../components/Table';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import WithLoading from './../components/Loading';
import User from './../components/User';
import Notification from './../components/Notification';

function TablePage() {
  /**
   * States
   */
 
  const [loading,setLoading]=useState(true);
  const [displayUser,setDisplayUser]=useState(false);
  const [user,setUser]=useState()
  const [users,setUsers]=useState([]);
  const ListWithLoading = WithLoading(Table);

 /**
  * fetch Data
  */
  useEffect(() => {
    const getData = async () =>{
    const usersData = await fetchData()
    setUsers(usersData)
    }
    getData()
    }, [])

  const fetchData = async () =>{
    try{
      const res = await fetch('https://60b4f24cfe923b0017c833c3.mockapi.io/test');
      const data = await res.json()
      setLoading(false)
      return data;
    }catch(err){
      toast.error("request failed!");
    }
  }


  return (
    <div className="App" >

      {/* {displayUser && <User displayUser={displayUser} users={user}/>} */}

      <ListWithLoading isLoading={loading} users={users} displayUser={displayUser} />
 
    </div>
  );
}

export default TablePage;
