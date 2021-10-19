import './App.css';
import { styled } from '@mui/material/styles';
import Recipe from './Recipe';
import { useState, useEffect } from 'react';
// import {Button, FormControl, InputLabel, Input, TextField} from '@mui/material';
import db from './firebase';
// import firebase from 'firebase';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function ListoCopy() {
  const [recipes, setRecipes] = useState([]);



  useEffect(() => {
    db.collection('recipes').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setRecipes(snapshot.docs.map(doc => ({ id: doc.id, recipe: doc.data().recipe, ingrident: doc.data().ingrident, preparation: doc.data().preparation })))
    })
  }, []);

  return (

    <div className="App">
      <h1 style={{marginBottom: "20px"}}>Your Personal Recipe Title List 🍕</h1>
      <TableContainer component={Paper} style={{width: '45vh', marginLeft: '50px', textAlign: 'center'}}>
        <Table sx={{ Width: '400px' }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell style={{textAlign: 'center'}}>Recipe</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recipes.map((recipe) =>
              <Recipe recipe={recipe} />)}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
} 
export {
  StyledTableRow,
  StyledTableCell,
};

