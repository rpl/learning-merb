# run very flat apps with merb -I <app file>.

Merb::Config.use { |c|
  c[:framework]           = { :public => [Merb.root / "public", nil] },
  c[:session_store]       = 'none',
  c[:exception_details]   = true
}

Merb::Router.prepare do |r|
  r.match('/').to(:controller => 'merbveryflat', :action =>'index')
end

class Merbveryflat < Merb::Controller
  def index
    "hi"
  end
end
