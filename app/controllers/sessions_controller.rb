class SessionsController < ApplicationController

  # Get rid of text and redirect to appropriate routes for Devin


  def create
  auth_hash = request.env['omniauth.auth']

  @authorization = Authorization.find_by_provider_and_uid(auth_hash["provider"], auth_hash["uid"])
    if @authorization
      render :text => "Welcome back #{@authorization.user.name}! You have already signed up."
    else
      binding.pry
      user = User.new :name => auth_hash["info"]["name"]
      user.authorizations.build :provider => auth_hash["provider"], :uid => auth_hash["uid"]
      user.save!

      render :text => "Hi #{user.name}! You've signed up."
    end
  end

  # def create
  #   auth_hash = request.env['omniauth.auth']
  #
  #   render :text => auth_hash.inspect
  # end

  protected

  # def auth_hash
  #   request.env['omniauth.auth']
  # end
end
