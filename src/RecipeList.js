import React from 'react';
import './Recipe.css';
import { StyledTableCell } from './ListoCopy';
import {StyledTableRow} from './ListoCopy';


function RecipeList(props) {
    return (
        <StyledTableRow key={props.recipe.recipe}>
            <StyledTableCell component="th" scope="row">
                {props.recipe.recipe}
            </StyledTableCell>
            <StyledTableCell align="right">{props.recipe.ingrident}</StyledTableCell>
            <StyledTableCell align="right">{props.recipe.preparation}</StyledTableCell>
        </StyledTableRow>
    )
}

export default RecipeList;
