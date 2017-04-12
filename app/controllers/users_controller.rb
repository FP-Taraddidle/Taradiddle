class UsersController < ApplicationController


  def new
    @user =  User.new
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def updated

  end


  def email
    user = User.find(params[:id])
    @address = twitter_client.user(user.name).email
    binding.pry
    render json: @address
  end

end
