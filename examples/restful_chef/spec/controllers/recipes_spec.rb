require File.join(File.dirname(__FILE__), '..', 'spec_helper.rb')

describe Recipes, "index action" do

  before do
    @recipe = mock('recipe', :length => nil)
    Recipe.stub!(:all).and_return([@recipe])
  end

  it 'should fetch all recipes' do
    Recipe.should_receive(:all).and_return([@recipe])
    dispatch_to(Recipes, :index) do |controller|
      controller.stub!(:display)
    end
  end

  it 'should display all recipes' do
    dispatch_to(Recipes, :index) do |controller|
      controller.should_receive(:display)
    end
  end

end

describe Recipes, 'create action' do

  it 'should create a new record' do
    @recipe = mock('recipe', :save => nil)
    Recipe.should_receive(:new).with(:name => 'New recipe').and_return(@recipe)
    dispatch_to(Recipes, :create, :name => 'New recipe')
  end

end
