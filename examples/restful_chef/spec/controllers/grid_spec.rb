require File.join(File.dirname(__FILE__), '..', 'spec_helper.rb')

describe Grid, "index action" do
  before(:each) do
    dispatch_to(Grid, :index)
  end
end