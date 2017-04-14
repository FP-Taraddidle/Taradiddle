class UsersController < ApplicationController

  def new
    @user =  User.new
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      redirect_to "/"
    else
      redirect_to "/email"
    end
  end

  def destroy
    if current_user
      @user = User.find(params[:id]).destroy
      redirect_to "/"
    else
      render text: "not logged in"
    end
  end

  private

  def user_params
    params.permit(:intensity, :email)
  end

end
