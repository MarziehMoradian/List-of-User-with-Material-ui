import React,{useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import Avatar from '@material-ui/core/Avatar';
import './Table.css';
import {useHistory} from 'react-router-dom';




const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
    '&:nth-of-type(even)':  {
    background: '#c3f5ea80',
  },
},
});

const theme = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};
export default function CustomizedTables({users,pageSize,onClick}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  let history=useHistory(); 
  const classes = useStyles();
 
  return (
    <div>
    <TableContainer component={Paper} >
      <div className="table">
      <Table className={classes.table} aria-label="customized table" style={{backgroundColor:'#fafafa'}}>
        <TableHead  >
          <TableRow >
            <StyledTableCell style={{backgroundColor:'#00c79f', fontSize:'20px'}}>Accounting Code</StyledTableCell>
            <StyledTableCell align="center" style={{backgroundColor:'#00c79f', fontSize:'20px'}}>Name</StyledTableCell>
            <StyledTableCell align="center" style={{backgroundColor:'#00c79f', fontSize:'20px'}}>Company</StyledTableCell>
            <StyledTableCell align="center" style={{backgroundColor:'#00c79f', fontSize:'20px'}}>Phone Number</StyledTableCell>
            <StyledTableCell align="center" style={{backgroundColor:'#00c79f', fontSize:'20px'}}>Email</StyledTableCell>
            <StyledTableCell align="center" style={{backgroundColor:'#00c79f', fontSize:'20px'}}>Avatar</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user) => (
            
            <TableRow key={user.id} className={classes.table
            } >
              <TableCell component="th" scope="row" >
                {user.code}
              </TableCell>
              <TableCell align="center" onClick={()=>history.push(`user/${user.id}`)} className="cellName">{user.name}</TableCell>
              <TableCell align="center" >{user.company}</TableCell>
              <TableCell align="center">{user.phonenumber}</TableCell>
              <TableCell align="center">{user.email}</TableCell>
              <TableCell align="center"><Avatar src={user.avatar} alt="avatar" style={{width:'100px',height:'100px'}}/></TableCell>
            </TableRow>

          ))}
        </TableBody>
      </Table>
      </div>
    </TableContainer>
    <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />

    </div>
  );
}
