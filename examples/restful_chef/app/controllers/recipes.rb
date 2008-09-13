class Recipes < Application

  provides :json

  def index
    @recipes = Recipe.all
    display(@recipes)
  end

  def create
    @recipe = Recipe.new(:name => params[:name])
    @recipe.save
    display :success => true  
  end

  def update
    @recipe = Recipe.get!(params[:id])
    @recipe.update_attributes(:name => params[:name])
    display :success => true
  end

  def delete
    @recipe = Recipe.get!(params[:id])
    @recipe.destroy
    display :success => true
  end

end
