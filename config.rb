# General configuration

# Reload the browser automatically whenever files change
activate :livereload

# Build-specific configuration
configure :build do
  # Minify CSS on build
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript
end

# Activate and configure middleman-deploy
activate :deploy do |deploy|
  deploy.deploy_method = :git
end
