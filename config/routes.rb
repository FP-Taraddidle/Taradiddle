Rails.application.routes.draw do

  scope :api do
    resources :twitterings
    resources :users
    match "/twitter/signup" => redirect("https://twitter.com/signup?lang=en"), :as => :twitter, via: 'get'
    get '/tweets' => 'twitterings#show'
    get '/tweets/likes' => 'twitterings#likes'
  end

  get   '/login', :to => 'sessions#new', :as => :login
  match '/auth/:provider/callback', :to => 'sessions#create', via: 'get'
  match '/auth/failure', :to => 'sessions#failure', via: 'get'

  get '/:something1(/:something2)(/:something3)', :to => 'application#static'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end