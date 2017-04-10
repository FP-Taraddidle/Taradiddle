class TwitteringsController < ApplicationController

    def show
      user = User.find(params[:id])
      @post = twitter_client.user_timeline(user.name, count: 200).count
      @post.save!
      render json: @post
    end

    def likes
      user = User.find(params[:id])
      @likes = twitter_client.favorites(user.name, count: 20).count
      render json: @likes
    end

    def index

    end

end
