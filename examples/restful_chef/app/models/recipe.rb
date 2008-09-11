class Recipe
  include DataMapper::Resource

  property :id, Integer, :serial => true
  property :name, String

  has n, :ingredients

end
