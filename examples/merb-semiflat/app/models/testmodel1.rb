class Testmodel1
  include DataMapper::Resource

  property :id,         Integer, :serial => true
  property :title,      String
  property :body,       Text
  property :created_at, DateTime
end
