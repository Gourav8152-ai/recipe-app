import './App.css';
import { styled } from '@mui/material/styles';
import RecipeList from './RecipeList';
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
      <h1>Your Personal Receipe List 🍕</h1>
      <TableContainer component={Paper} style={{width: '75vw', marginLeft: '100px', padding: '10px'}}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Receipe</StyledTableCell>
              <StyledTableCell align="right">Ingrident</StyledTableCell>
              <StyledTableCell align="right">Preparation</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recipes.map((recipe) =>
              <RecipeList recipe={recipe} />)}
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

