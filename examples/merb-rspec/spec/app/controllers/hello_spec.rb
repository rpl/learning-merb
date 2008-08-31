require File.join(File.dirname(__FILE__), "../..", 'spec_helper.rb')

describe Hello do

  it 'should display hello message' do
    dispatch_to(Hello, :index).should be_successful
  end

end
