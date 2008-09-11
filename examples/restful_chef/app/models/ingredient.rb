class Ingredient
  include DataMapper::Resource

  property :id, Integer, :serial => true
  property :name, String

  belongs_to :recipe
end
