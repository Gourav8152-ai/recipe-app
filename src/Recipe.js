import React from 'react';
import './Recipe.css';
import { StyledTableCell } from './ListoCopy';
import {StyledTableRow} from './ListoCopy';
import db from './firebase';
import DeleteIcon from '@mui/icons-material/Delete';

function Recipe(props) {
    return (
        <div>
        <StyledTableRow key={props.recipe.recipe}>
            <StyledTableCell component="th" scope="row" style={{alignItems: 'center'}}>
                {props.recipe.recipe}
            </StyledTableCell>
        </StyledTableRow>
        <DeleteIcon onClick={event => {
            db.collection('recipes').doc(props.recipe.id).delete()}}></DeleteIcon>
        </div>
    )
}

export default Recipe;