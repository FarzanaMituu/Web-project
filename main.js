
const recipes = {
    'bananaBread': {
        title: 'Banana Bread',
        ingredients: ['3 ripe bananas', '1/2 cup melted butter', '1 cup sugar', '1 egg, beaten', '1 tsp vanilla extract', '1 tsp baking soda', '1.5 cups flour'],
        instructions: 'Preheat oven to 350°F. Mash bananas, mix ingredients, and bake for 60 minutes.'
    },
    'spaghetti': {
        title: 'Spaghetti Bolognese',
        ingredients: ['200g spaghetti', '1 cup ground beef', '1/2 cup tomato sauce', '1 onion, chopped', '1 garlic clove, minced', 'Salt and pepper', 'Parmesan cheese for garnish'],
        instructions: 'Cook spaghetti, sauté beef and vegetables, mix with sauce, and serve with cheese.'
    },
    'salad': {
        title: 'Fresh Garden Salad',
        ingredients: ['1 cup lettuce', '1/2 cup cherry tomatoes', '1 cucumber, sliced', '1/4 cup feta cheese', '1/4 cup olives', 'Olive oil and vinegar for dressing'],
        instructions: 'Mix ingredients, drizzle with dressing, and enjoy fresh!'
    }
};


function showRecipe(recipeName) {
    const recipe = recipes[recipeName];
    const recipeContent = document.getElementById("recipe-content");

    if (recipe) {
        recipeContent.innerHTML = `
            <h3>${recipe.title}</h3>
            <p>Ingredients:</p>
            <ul>${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>
            <p>Instructions: ${recipe.instructions}</p>
        `;
    } else {
        recipeContent.innerHTML = '<p>Recipe not found.</p>';
    }
}


document.getElementById('recipe-form').addEventListener('submit', function(e) {
    e.preventDefault();

    
    const title = document.getElementById('recipe-title').value.trim();
    const ingredients = document.getElementById('recipe-ingredients').value.trim().split(',');
    const instructions = document.getElementById('recipe-instructions').value.trim();

    
    const newRecipeKey = title.replace(/\s+/g, '').toLowerCase();  // Generate a unique key by removing spaces and lowercasing the title
    recipes[newRecipeKey] = {
        title: title,
        ingredients: ingredients,
        instructions: instructions
    };

    
    const newRecipeCard = document.createElement('div');
    newRecipeCard.classList.add('recipe-card');
    newRecipeCard.setAttribute('onclick', `showRecipe('${newRecipeKey}')`);
    newRecipeCard.innerHTML = `
        <h3>${title}</h3>
        <p>A new delicious recipe.</p>
    `;
    document.getElementById('recipe-list').appendChild(newRecipeCard);

    
    document.getElementById('recipe-form').reset();
});
