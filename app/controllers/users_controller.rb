class UsersController < ApplicationController

  def new
    @user =  User.new
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def update
    @user = current_user
    if @user.update(user_params)
      redirect_to "/profile"
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

  def reps
    if current_user
      @user = current_user
      @count = 60/current_user.intensity.level
    end
    render json: @count
  end

  private

  def user_params
    params.permit(:intensity_id, :email, :id, :token)
  end

end
