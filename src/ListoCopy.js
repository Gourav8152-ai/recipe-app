import './App.css';
import RecipeList from './RecipeList';
import { useState , useEffect} from 'react';
// import {Button, FormControl, InputLabel, Input, TextField} from '@mui/material';
import db from './firebase';
// import firebase from 'firebase';

function ListoCopy() {
  const [recipes, setRecipes] = useState([]);
  // const [input, setInput] = useState('');
  // const [inputIngrident, setInputIngrident] = useState('');
  // const [inputPreparation, setInputPreparation] = useState('');


  useEffect(() => {
    db.collection('recipes').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setRecipes(snapshot.docs.map(doc => ({id: doc.id, recipe: doc.data().recipe, ingrident: doc.data().ingrident, preparation: doc.data().preparation})))
    })
  }, []);

  return (
    
    <div className="App">
      <h1>Your Personal Receipe List 🍕</h1>
      {/* <FormControl className="app__searchform">
        <InputLabel>Recipe Name</InputLabel>
        <Input type="text" placeholder="Pizza" className="app__input" style={{ marginTop: '30px' }} value={input} onChange={event => setInput(event.target.value)}/>
        <TextField type="text" placeholder="Enter the Ingridents" multiline rows={7} rowsMax={15} className="app__inputIngrident" style={{ marginTop: '15px' }} value={inputIngrident} onChange={event => setInputIngrident(event.target.value)}/>
        <TextField type="text" placeholder="Enter the preparation steps" multiline rows={5} rowsMax={7} className="app__inputPreparation" style={{ marginTop: '15px' }} value={inputPreparation} onChange={event => setInputPreparation(event.target.value)}/>
        <Button className="app__submitButton" disabled={!input, !inputIngrident, !inputPreparation} className="app_addValue" style={{ marginTop: '15px' }} type="submit" variant="contained" onClick={addRecipeTitle}>Add New Recipe</Button>
      </FormControl> */}
      <ul>
        {recipes.map((recipe)=>
        <RecipeList recipe={recipe} />)}
      </ul>
    </div>
  );
}

export default ListoCopy;

