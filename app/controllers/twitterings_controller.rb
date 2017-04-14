class TwitteringsController < ApplicationController

  def create
    user = User.find(params[:id])
    @twitter = Twittering.new
    @twitter.user = user
    @twitter.tweets = tweeting
    @twitter.likes = liking
    @twitter.save!
    render json: @twitter
  end

  def index
    if current_user
      @twittering = current_user.user.twitterings
    end
    render json: @twittering
  end

  def show
    if current_user
      @twittering = current_user.user.twitterings.last
    end
    render json: @twittering
  end



end
