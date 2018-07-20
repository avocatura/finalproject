# JSR Finalproject

## This site uses the Edamam API to search for and filter through recipes.

##On loading of the page, the user can search for a type of recipe or ingredients in the recipe using the search bar. Once the enter key or search icon or pressed, the loader gif will appear and the API get function will be called. Once the results have fully loaded, the loader gif will disappear and 100 results will appear on the page. If the user's search returns no results, an alert message will prompt the user to try again.

##Each recipe will display a title, a picture and a link to the recipe.

##The user can refine the search by clicking on the refine button which opens a dropdown menu with different health options that may be checked. Once the user checks boxes and clicks search, the API will be called again using those new parameters. Currently, only the vegan and vegetarian options are working. I couldn't get the API url to work when I used gluten-free or dairy-free as parameters, or any other parameter given in the documentation for that matter. I think it might have something to do with the basic plan I signed up for when I gained access to the API.

##Future goals would be solving the parameter issue and adding more information to each result recipe box, potentially through the use of a modal. In addition, instead of having 100 results load on the page I'd like to have infinite loading.