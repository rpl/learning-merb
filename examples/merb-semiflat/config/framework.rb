use_orm :datamapper

Merb::Config[:framework] = {
  :application => Merb.root / "application.rb",
  :config => [Merb.root / "config", nil],
  :public => [Merb.root / "public", nil],
  :view   => Merb.root / "views",
  :model => Merb.root / "app/models",
}

Merb::BootLoader.before_app_loads do
  dependency "dm-serializer"
  dependency "dm-types"
end

Merb::BootLoader.after_app_loads do
  dependency "merb_helpers"
  dependency "merb-haml"
end
