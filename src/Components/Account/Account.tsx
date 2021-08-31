import React from 'react'
import PinTable from './PinTable'
import './account.css'
import PatchTable from './PatchTable'
import APIURL from '../../helpers/environment'



export default class Account extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      pins: [],
      patches: [],
      sessionToken: localStorage.getItem('sessionToken'),
      username: localStorage.getItem('username')
    }
  }

  componentDidMount() {
    Promise.all([
      fetch(`${APIURL}/pin/${this.state.username}`, {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': this.state.sessionToken
        })
      }),
      fetch(`${APIURL}/patch/${this.state.username}`, {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': this.state.sessionToken
        })
      })
    ])
    .then(([resPin, resPatch]) => Promise.all([resPin.json(), resPatch.json()]))
    .then(([pinData, patchData]) => this.setState({
      pins: pinData,
      patches: patchData
    }))
  }
  
  
  render(){
    return(
      <div className='mainDiv'>
        <p className='accTitle'>{this.state.username}'s Account</p>
        <div className="tables">
        <div className="pinTable">
          <p className='pinHead'>Your Pins</p>
          <PinTable pins={this.state.pins}/>
          {console.log(this.state.pins, '0000000000000000000000')}
        </div>
        <div className="patchTable">
          <p className='patchHead'>Your Patches</p>
          <PatchTable patches={this.state.patches}/>
        </div>
        </div>
      </div>
    )
  }
}






































// import React, {useState} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

// const useStyles = makeStyles({
//   table: {
//     width: '20%',
//   },
// });



// function createData(pinName: string, artist: string, description: string, size: number, pinType: string, condition: string) {
//   return { pinName, artist, description, size, pinType, condition };
// }

// const rows = [
//   createData('Frozen yoghurt', '159', '6.0', 24, '4.0', '4'),
//   createData('Ice cream sandwich', '237', '9.0', 37, '4.3', '3'),
//   createData('Eclair', '262', '16.0', 24, '6.0', '4'),
//   createData('Cupcake', '305', '3.7', 67,'4.3', '4'),
//   createData('Gingerbread', '356', '16.0', 49, '3.9', '3'),
// ];



// export default function BasicTable() {
//   const classes = useStyles();

//   const FetchPins = (props: any) => {
//     const [sessionToken, setSessionToken] = useState('')
//     fetch(`${APIURL}/pin/${localStorage.getItem('username')}`, {
//       method: "GET",
//       headers: new Headers({
//         "Content-Type": "application/json",
//         "Authorization": props.sessionToken
//       }),
//     })
//     .then((res) => res.json())
//     .then(data => {
//       console.log(data)
//     })
//   }

//   return (
//     <div className="mainDiv">
//     <TableContainer style={{width: '35%'}} component={Paper}>
//       <Table className={classes.table} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Pin Name</TableCell>
//             <TableCell align="right">Artist</TableCell>
//             <TableCell align="right">Description</TableCell>
//             <TableCell align="right">Size</TableCell>
//             <TableCell align="right">Pin Type</TableCell>
//             <TableCell align="right">Condition</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow key={row.pinName}>
//               <TableCell component="th" scope="row">
//                 {row.pinName}
//               </TableCell>
//               <TableCell align="right">{row.artist}</TableCell>
//               <TableCell align="right">{row.description}</TableCell>
//               <TableCell align="right">{row.size}</TableCell>
//               <TableCell align="right">{row.pinType}</TableCell>
//               <TableCell align="right">{row.condition}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//     <button onClick={FetchPins}>Click me</button>
//     </div>
//   );
// }