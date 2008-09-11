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

end
