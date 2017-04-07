class SessionsController < ApplicationController

  # Get rid of text and redirect to appropriate routes for Devin


  def create
  auth_hash = request.env['omniauth.auth']

  @authorization = Authorization.find_by_provider_and_uid(auth_hash["provider"], auth_hash["uid"])
    if @authorization
      render json: @user
    else
      # binding.pry
      user = User.new :name => auth_hash["info"]["name"]
      user.authorizations.build :provider => auth_hash["provider"],
                                :uid => auth_hash["uid"],
                                :user_oauth_token => auth_hash["extra"]["access_token"].params[:oauth_token],
                                :user_oauth_secret => auth_hash["extra"]["access_token"].params[:oauth_token_secret],
                                :oauth_token => params[:oauth_token],
                                :oauth_verifier => params[:oauth_verifier]



      user.save!
      render json: @user
      # need route to redirect user to collect email here
    end
  end



end
