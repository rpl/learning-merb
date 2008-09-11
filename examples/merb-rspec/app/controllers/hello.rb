class Hello < Application

  # ...and remember, everything returned from an action
  # goes to the client...
  def index
    @time = Time.now
    render
  end
  
end
