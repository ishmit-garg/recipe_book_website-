// ===== 1. SEARCH + FILTER RECIPES =====
function filterRecipes() {
  var text = document.getElementById("search").value.toLowerCase();
  var category = document.getElementById("category").value;
  var cards = document.getElementsByClassName("card");

  for (var i = 0; i < cards.length; i++) {
    var name = cards[i].getAttribute("data-name").toLowerCase();
    var type = cards[i].getAttribute("data-category");

    if (name.includes(text) && (category == "all" || category == type)) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
}

// ===== 2. ADD + SAVE RECIPE =====
function addRecipe() {
  var title = document.getElementById("title").value;
  var type = document.getElementById("type").value;
  var ingredients = document.getElementById("ingredients").value;

  var card = '<article class="card" data-name="' + title + '" data-category="' + type + '">';
  card = card + '<div class="picture">🍽️</div>';
  card = card + '<h3>' + title + '</h3>';
  card = card + '<p class="tag">' + type + '</p>';
  card = card + '<h4>Ingredients</h4><p>' + ingredients + '</p>';
  card = card + '</article>';

  document.getElementById("recipeList").innerHTML += card;
  document.getElementById("message").innerText = "Recipe added! Check the Recipes section.";

  var recipes = JSON.parse(localStorage.getItem("recipes") || "[]");
  recipes.push({title: title, type: type, ingredients: ingredients});
  localStorage.setItem("recipes", JSON.stringify(recipes));
  return false;
}

// ===== 3. LOAD SAVED RECIPES =====
window.onload = function() {
  var recipes = JSON.parse(localStorage.getItem("recipes") || "[]");

  for (var i = 0; i < recipes.length; i++) {
    var r = recipes[i];
    var card = '<article class="card" data-name="' + r.title + '" data-category="' + r.type + '">';
    card = card + '<div class="picture">🍽️</div>';
    card = card + '<h3>' + r.title + '</h3>';
    card = card + '<p class="tag">' + r.type + '</p>';
    card = card + '<h4>Ingredients</h4><p>' + r.ingredients + '</p>';
    card = card + '</article>';
    document.getElementById("recipeList").innerHTML += card;
  }
};
