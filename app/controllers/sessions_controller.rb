class SessionsController < ApplicationController

  def create
    auth_hash = request.env['omniauth.auth']
    if session[:user_id]
      # Means our user is signed in. Add the authorization to the user
      User.find(session[:user_id]).add_provider(auth_hash)

      render :text => "You can now login using #{auth_hash["provider"].capitalize} too!"
    else
      # Log him in or sign him up
      auth = Authorization.find_or_create(auth_hash)

      # Create the session
      session[:user_id] = auth.user.id

      render :text => "Welcome #{auth.user.name}!"
    end

    def destroy
      session[:user_id] = nil
      render :text => "You've logged out!"
    end


    def failure
      render :text => "Sorry, but you didn't allow access to our app!"
    end






    
    # @authorization = Authorization.find_by_provider_and_uid(auth_hash["provider"], auth_hash["uid"])

    # if @authorization
    #   redirect_to "/profile"
    # else
    #   user = User.new :name => auth_hash["info"]["nickname"]
    #   user.authorizations.build :provider => auth_hash["provider"],
    #                             :uid => auth_hash["uid"],
    #                             # :user_oauth_token => auth_hash["extra"]["access_token"].params[:oauth_token],
    #                             # :user_oauth_secret => auth_hash["extra"]["access_token"].params[:oauth_token_secret],
    #                             :oauth_token => params[:oauth_token],
    #                             :oauth_verifier => params[:oauth_verifier]
    #   user.save!
    #   if Rails.env == "development"
    #     redirect_to "http://localhost:3001/email?token=#{user.token}&id=#{user.id}"
    #   else
    #     redirect_to root_url + "email?token=#{user.token}&id=#{user.id}"
    #   end
    # end
  end

end
