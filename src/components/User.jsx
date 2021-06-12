import React from 'react';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import InputLabel from '@material-ui/core/InputLabel';
import AppBar from './AppBar';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';
import './User.css';
import Tab from './Tabs';


const useStyles = makeStyles({
    root: {
        margin:'10px auto',
        width:'100%',
    },
    img:{
        width:'200px',
        height:'200px',
        margin:'20px', 
        alignSelf: 'center',
    },
  });
function User({user}) {
    const classes = useStyles()
    
    return (
        <div>
            <AppBar />
        
        
                <div className="form" >
                    <Avatar  src={user?.avatar} alt="" className={classes.img}/>
                <div className="inputs" style={{display:'flex',flexDirection:'column'}} >
                <div>
                <InputLabel >Accounting Code</InputLabel>
                <TextField id="standard-multiline-flexible" variant="outlined" value={user?.code} size="small"   className={classes.root}  InputProps={{readOnly: true,}} />
                </div>
                <div>
                <InputLabel >Name</InputLabel>
                <TextField id="standard-multiline-flexible"   variant="outlined" value={user?.name} size="small"   className={classes.root} InputProps={{readOnly: true,}}/>
                </div>
                <div>
                <InputLabel >Nick Name</InputLabel>
                <TextField id="standard-multiline-flexible"  variant="outlined"  value={user?.Nickname} size="small"    className={classes.root} InputProps={{readOnly: true,}}/>
                </div>
                <div>
                <InputLabel >Company</InputLabel>
                <TextField id="standard-multiline-flexible"  variant="outlined" value={user?.company} size="small"   focused className={classes.root} InputProps={{readOnly: true,}}/>
                </div>
                <div>
                <InputLabel >Email</InputLabel>
                <TextField id="standard-multiline-flexible"  variant="outlined"  value={user?.email} size="small"   className={classes.root} InputProps={{readOnly: true,}}/>
                </div>
                <div>
                <InputLabel >Job Title</InputLabel>
                <TextField id="standard-multiline-flexible"  variant="outlined"  value={user?.jobtittle} size="small"   className={classes.root} InputProps={{readOnly: true,}}/>
                </div>
                <div>
                <InputLabel >Phone Number</InputLabel>
                <TextField id="standard-multiline-flexible"   variant="outlined"  value={user?.phonenumber} size="small"   className={classes.root} InputProps={{readOnly: true,}}/>
                </div>

            </div>
            {/* )} */}
        </div>
        </div>
    )
}

export default User
