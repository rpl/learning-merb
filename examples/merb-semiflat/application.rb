class Foo < Merb::Controller

  def _template_location(action, type = nil, controller = controller_name)
    controller == "layout" ? "layout.#{action}.#{type}" : "#{action}.#{type}"
  end

  def index
    "Hello index"
  end

  def foo
    render
  end
  
end

class Exceptions < Merb::Controller
  def bad_request
    "BADREQUEST"
  end

  def not_found
    "NOTFOUND"
  end

end


class Sheets < Merb::Controller
  provides :xml, :json, :yaml

  def _template_location(action, type = nil, controller = controller_name)
    controller+".#{action}.#{type}"
  end

  def index
    @sheets = Sheet.all
    display @sheets
  end

  def show
    @sheet = Sheet.get!(params[:id])
    display @sheet
  rescue DataMapper::ObjectNotFoundError
    raise Merb::ControllerExceptions::NotFound
  end

  def new
  end

  def create
    case params[:type]
    when "incident":
        @sheet = IncidentSheet.new
    when "problem":
        @sheet = ProblemSheet.new
    when "change":
        @sheet = ChangeSheet.new
    when "task":
        @sheet = TaskSheet.new
    else #techsupport
      @sheet = TechnicalSupportRequest.new
    end

    
    case content_type
    when :json
      #create by rest json
      puts JSON
    else
      #create by form
    end
  end

  def update
    @sheet = Sheet.get!(params[:id])

    case content_type
    when :json
      #create by rest json
      puts JSON
    else
      #update by form
    end
  end

  def destroy
    @sheet = Sheet.get!(params[:id])

    case content_type
    when :json
      #create by rest json
      puts JSON
    else
      #update by form
    end
  end
end
