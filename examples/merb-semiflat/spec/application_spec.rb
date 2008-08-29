
require 'rubygems'
require 'spec'
require 'merb-core'

$LOAD_PATH.unshift(File.expand_path(File.join(File.dirname(__FILE__),'..')))
require 'application'

Merb.start_environment(:testing => true, :adapter => 'runner', :environment => ENV['MERB_ENV'] || 'test')
 
Spec::Runner.configure do |config|
  config.include(Merb::Test::ViewHelper)
  config.include(Merb::Test::RouteHelper)
  config.include(Merb::Test::ControllerHelper)
end

describe Sheets do
  
  describe '#index' do
    
    it 'should fetch all sheets' do
      
      Sheets.should_receive(:all)
      
      dispatch_to(Sheets, :index) do |controller|
        controller.stub!(:display)
      end
      
    end
    
  end
  
end
