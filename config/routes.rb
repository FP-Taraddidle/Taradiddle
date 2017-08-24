Rails.application.routes.draw do
 # root "/"
  scope :api do
    resources :twitterings
    resources :users
    match "/twitter/signup" => redirect("https://twitter.com/signup?lang=en"), :as => :twitter, via: 'get'
    get '/tweets' => 'twitterings#show'
    get '/tweets/likes' => 'twitterings#likes'
    get '/block' => 'blocks#show'
    post '/routine' => 'routines#create'
    get '/routine' => 'routines#show'
    get '/intensities' => 'intensities#show'
    get 'reps' => 'users#reps'
  end

  get   '/login', :to => 'sessions#new', :as => :login
  get '/logout', :to => 'sessions#destroy'
  match '/auth/:provider/callback', :to => 'sessions#create', via: 'get'
  # get '/auth/instagram' => 'sessions#create'
  match '/auth/failure', :to => 'sessions#failure', via: 'get'
  post '/tweeting/:id' => 'twitterings#tweeting'

  get '/:something1(/:something2)(/:something3)', :to => 'application#static'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
