import React from 'react';
import './Recipe.css';
import { StyledTableCell } from './ListoCopy';
import {StyledTableRow} from './ListoCopy';


function Recipe(props) {
    return (
        <StyledTableRow key={props.recipe.recipe}>
            <StyledTableCell component="th" scope="row">
                {props.recipe.recipe}
            </StyledTableCell>
        </StyledTableRow>
    )
}

export default Recipe;