class PostsController < ApplicationController

  def show
    user = User.find(params[:id])
    @post = twitter_client.user_timeline(user.name, count: 200).count
    render json: @post
  end


end
