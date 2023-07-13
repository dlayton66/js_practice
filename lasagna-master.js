// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

 export function cookingStatus(remainingTime) {
  switch(remainingTime) {
    case 0:
      return 'Lasagna is done.';
    case undefined: 
      return 'You forgot to set the timer.';
    default:
      return 'Not done, please wait.';
  }
}

export function preparationTime(layers, layerPrepTime = 2) {
  return layers.length * layerPrepTime;
}

export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;
  
  for(let i = 0; i < layers.length; i++) {
    if (layers[i] === 'noodles') {
      noodles += 50;
    } else if (layers[i] === 'sauce') {
      sauce += 0.2;
    }
  }

  return {
    noodles: noodles,
    sauce: sauce
  }
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length-1]);
}

export function scaleRecipe(recipe, servings) {
  let scaledRecipe = structuredClone(recipe);
  for (let key in scaledRecipe) {
    scaledRecipe[key] *= servings/2;
  }
  return scaledRecipe;
}