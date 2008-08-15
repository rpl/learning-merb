class Sheet
  include DataMapper::Resource

  property :id,         Integer, :serial => true
  property :sha_id,	String
  property :short_id,	String
  property :summary,    String
  property :body,       Text
  property :author,	String
  property :created_on, DateTime
  property :opened_on,  DateTime
  property :closed_on,  DateTime
  property :status,	String
  property :substatus,  String
  property :references, Yaml

  property :type, Discriminator

  def reference sheet
    self.references ||= []

    self.references << sheet.sha_id
  end

  def ref_sheets
    self.references.map do |i|
      Sheet.first(:conditions => { :sha_id.like => i }) 
    end
  end

  def from_json json
    self.attributes = JSON::parse(json)
  end
end

class IncidentSheet < Sheet
  property :workaround, Text, :lazy => false
  property :solution, Text, :lazy => false
  property :risks, Text, :lazy => false
end

class ChangeSheet < Sheet
  property :reason, Text, :lazy => false
  property :risks, Text, :lazy => false
  property :tasks, Text, :lazy => false
end

class TaskSheet < Sheet
  property :reason, Text, :lazy => false
  property :risks, Text, :lazy => false
  property :tasks, Text, :lazy => false
end

class ProblemSheet < Sheet
  property :risks, Text, :lazy => false
end
