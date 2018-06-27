function createRecipe(){
  //render information and send to recipe template
}

function displayEditForm(){
  //Fix this
}

Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)

Handlebars.registerHelper('displayIngredient', function() {
  return new Handlebars.safeString(this.body);
});
  

function init() {
  var formTemplate = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  var formHTML = formTemplate();
  document.getElementsByTagName('main')[0].innerHTML += formHTML;
  
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
