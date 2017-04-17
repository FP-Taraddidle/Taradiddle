class TwitteringsController < ApplicationController

  def create
    user = User.find(params[:id])
    @twitter = Twittering.new
    binding.pry
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

  def self.tweeting
    user = User.find(params[:id])
    tweet_arr = twitter_client.user_timeline(user.name, count: 200).collect{|i| i.created_at}
    @tweets = tweet_arr.select { |i| i if i > 24.hours.ago }.count
  end


end
