import React from 'react';
import {List, ListItem, ListItemText} from '@mui/material';
import './Recipe.css';
import db from './firebase';
import DeleteIcon from '@mui/icons-material/Delete';

function Recipe(props) {
    return (
        <List className="recipe__list" style={{border: '2px solid black', paddingLeft: '15px', marginBottom: '10px'}}>
          <ListItem disablePadding>
              <ListItemText primary={<h3>Receipe Name : {props.recipe.recipe}</h3>} />
              {/* <ListItemText primary={<h1>Preparation : {props.recipe.preparation}</h1>}/> */}
          </ListItem> 
          <ListItem disablePadding>
              <ListItemText primary={<h4>Ingrident : {props.recipe.ingrident}</h4>} />
              {/* <ListItemText primary={<h1>Preparation : {props.recipe.preparation}</h1>}/> */}
          </ListItem> 
          <ListItem disablePadding>
              <ListItemText primary={<h5>Preparation : {props.recipe.preparation}</h5>} />
              {/* <ListItemText primary={<h1>Preparation : {props.recipe.preparation}</h1>}/> */}
          </ListItem> 
          <DeleteIcon onClick={event => {
            db.collection('recipes').doc(props.recipe.id).delete()}}></DeleteIcon>
        </List>
        // <div>
        //     <li>{props.text}</li>
        // </div>
    )
}

export default Recipe;
