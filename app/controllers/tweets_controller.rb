class TweetsController < ApplicationController

  def show
    user = User.find(params[:id])
    @post = twitter_client.user_timeline(user.name, count: 200).count
    render json: @post
  end

  def favorites
    user = User.find(params[:id])
    @favorites = twitter_client.favorites(user.name, count: 20)
    render json: @favorites
  end


end
