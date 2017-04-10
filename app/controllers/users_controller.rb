class UsersController < ApplicationController


  def new
    @user =  User.new
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

end
 
