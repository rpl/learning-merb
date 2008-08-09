class Testmodel1
  include DataMapper::Resource
  include DataMapper::Serialize

  property :id,         Integer, :serial => true
  property :title,      String
  property :body,       Text
  property :created_at, DateTime
end
