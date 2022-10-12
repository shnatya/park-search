Rails.application.routes.draw do
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/me', to: 'users#show'
  post '/signup', to: 'users#create'

  get '/activities', to: 'activities#index'

  get '/activity_facilities', to: 'activity_facilities#index'

  get '/facilities', to: 'facilities#index'

  post '/trips', to: 'trips#create'
  delete '/trips/:id', to: 'trips#destroy'
  patch '/trips/:id', to: 'trips#update'
  get '/users/trips', to: 'trips#index'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
