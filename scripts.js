fetch('recipes.json')
  .then(response => response.json())
  .then(recipes => {
    const button = document.getElementById("randomRecipeBtn");
    const display = document.getElementById("recipeDisplay");

    button.addEventListener("click", () => {
      const recipe = recipes[Math.floor(Math.random() * recipes.length)];
      display.innerHTML = `
        <h2>${recipe.name}</h2>
        <h4>Ingredients:</h4>
        <ul>${recipe.ingredients.map(item => `<li>${item}</li>`).join("")}</ul>
        <h4>Instructions:</h4>
        <p>${recipe.instructions}</p>
      `;
    });
  })
  .catch(error => {
    document.getElementById("recipeDisplay").innerHTML =
      "<p>Failed to load recipes. Please try again later.</p>";
    console.error("Error loading recipes:", error);
  });