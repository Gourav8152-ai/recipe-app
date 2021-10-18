import React from 'react';
import {List, ListItem, ListItemText} from '@mui/material';
import './Recipe.css';
import db from './firebase';
import DeleteIcon from '@mui/icons-material/Delete';

function RecipeList(props) {
    return (
        <List className="recipe__list" style={{border: '2px solid black', paddingLeft: '15px', marginBottom: '10px'}}>
          <ListItem disablePadding>
              <ListItemText primary={<h3>Receipe Name : {props.recipe.recipe}</h3>} />
              {/* <ListItemText primary={<h1>Preparation : {props.recipe.preparation}</h1>}/> */}
          </ListItem> 
        </List>
        // <div>
        //     <li>{props.text}</li>
        // </div>
    )
}

export default RecipeList;
