Rails.application.routes.draw do

  get   '/login', :to => 'sessions#new', :as => :login
  match '/auth/:provider/callback', :to => 'sessions#create', via: 'get'
  match '/auth/failure', :to => 'sessions#failure', via: 'get'

  get '/tweets' => 'tweets#show'
  get '/tweets/favorites' => 'tweets#favorites'
  resources :users



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
