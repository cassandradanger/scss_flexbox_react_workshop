import React, {Component} from 'react';
import './gallery.scss';

class Gallery extends Component {
  state = {
    recipes: [
      {
        name: 'whipped feta with spicy honey',
        imageUrl: 'https://i.pinimg.com/564x/2c/35/7e/2c357e71696c80fa80dce9c4f5f3bfc5.jpg',
        recipeUrl: 'https://www.servingdumplings.com/recipes/whipped-feta-dip-with-spicy-honey/',
      },
      {
        name: 'lemon vinegrette',
        imageUrl: 'https://i.pinimg.com/564x/cc/1b/ef/cc1bef5bfeb58d545eb1900c57550968.jpg',
        recipeUrl: 'https://julieblanner.com/lemon-vinaigrette/',
      },
      {
        name: 'white bean soup',
        imageUrl: 'https://i.pinimg.com/564x/9b/19/19/9b191960e1c61315ae580a940aa06635.jpg',
        recipeUrl: 'https://dishingouthealth.com/white-bean-soup/',
      },
      {
        name: 'bao buns',
        imageUrl: 'https://i.pinimg.com/564x/98/13/44/98134425421ff783a7bc3b1f5a3a387e.jpg',
        recipeUrl: 'https://www.loveandlemons.com/bao-buns/',
      },
      {
        name: 'pumpkin cake cookies',
        imageUrl: 'https://i.pinimg.com/564x/7f/e9/73/7fe973e6c38652388ea68fa4f9e756d0.jpg',
        recipeUrl: 'https://www.withpeanutbutterontop.com/pumpkin-cake-cookies/',
      },
      {
        name: 'salted honey butter dinner rolls',
        imageUrl: 'https://i.pinimg.com/564x/9e/bb/9f/9ebb9f1c894f95c54b8d02345071c545.jpg',
        recipeUrl: 'https://www.halfbakedharvest.com/salted-honey-butter-parker-house-rolls/',
      },
      {
        name: 'sweet potato, chickpea and spinach curry',
        imageUrl: 'https://i.pinimg.com/564x/4c/83/43/4c8343e7ebc2ba6c43c537546b7fae22.jpg',
        recipeUrl: 'https://thevegan8.com/sweet-potato-chickpea-and-spinach-coconut-curry/',
      },
    ]
  }

  render() {
    return (
        <div className="gallery">
          this is the gallery
          <ul>
            {this.state.recipes.map((recipeObject)=> {
              return <li key={recipeObject.name}>
                <span className="recipeName">{recipeObject.name}</span>
                <a href={recipeObject.recipeUrl}>
                  <img src={recipeObject.imageUrl} alt={recipeObject.name}/>
                </a>
              </li>
            })}
          </ul>
        </div>
  )}
}

export default Gallery;
