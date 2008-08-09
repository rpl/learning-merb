# Move this to application.rb if you want it to be reloadable in dev mode.
Merb::Router.prepare do |r|
  r.match('/').to(:controller => 'foo', :action => 'index')
  r.match('/foo').to(:controller => 'foo', :action => 'foo')
  r.default_routes
end

Merb::Config.use { |c|
  c[:environment]         = 'production',
  c[:framework]           = {},
  c[:log_level]           = 'debug',
  c[:use_mutex]           = false,
  c[:session_store]       = 'cookie',
  c[:session_id_key]      = '_session_id',
  c[:session_secret_key]  = '7fdd24b15cb435d4177d30be4cf21b01968bdc54',
  c[:exception_details]   = true,
  c[:reload_classes]      = true,
  c[:reload_time]         = 0.5
}
