import React from 'react';
import {List, ListItem, ListItemText, ListItemAvatar, Button} from '@mui/material';
import './Recipe.css';
import db from './firebase';
import DeleteIcon from '@mui/icons-material/Delete';

function Recipe(props) {
    return (
        <List className="recipe__list">
          <ListItem disablePadding>
              <ListItemAvatar>
                {/* <InboxIcon /> */}
              </ListItemAvatar>
              <ListItemText primary={props.recipe.recipe} secondary="Recipe" />
          </ListItem>
          <DeleteIcon onClick={event => {
            db.collection('recipes').doc(props.recipe.id).delete()}}>❌ Delete the Recipe</DeleteIcon>
        </List>
        // <div>
        //     <li>{props.text}</li>
        // </div>
    )
}

export default Recipe
