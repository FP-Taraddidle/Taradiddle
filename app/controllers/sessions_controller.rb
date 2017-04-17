class SessionsController < ApplicationController

  def create
  auth_hash = request.env['omniauth.auth']

  @authorization = Authorization.find_by_provider_and_uid(auth_hash["provider"], auth_hash["uid"])
    if @authorization
      redirect_to "/"
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
      if Rails.env == "development"
        redirect_to
        "https://localhost:3001/email?oauth_token=#{user.authorizations.first.oauth_token}&oauth_verifier=#{user.authorizations.first.oauth_verifier}"
      else
        redirect_to
        "/email?oauth_token=#{user.authorizations.first.oauth_token}&oauth_verifier=#{user.authorizations.first.oauth_verifier}"
      end

    end
  end



end
