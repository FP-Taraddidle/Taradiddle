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
    

  end

  def show
    user = User.find(params[:id])
    tweet_arr = twitter_client.user_timeline(user.name, count: 20).collect{|i| i.created_at}
    @tweets = tweet_arr.select { |i| i if i > 24.hours.ago }.count
    render json: @tweets
  end

  def tweeting
    user = User.find(params[:id])
    tweet_arr = twitter_client.user_timeline(user.name, count: 20).collect{|i| i.created_at}
    @tweets = tweet_arr.select { |i| i if i > 24.hours.ago }.count
  end

  def new
    @twitter = Twittering.new.(params[:user_id])
  end

  def liking
    user = User.find(params[:id])
    like_arr = twitter_client.favorites(user.name, count: 20).collect{|i| i.created_at}
    @likes = like_arr.select { |i| i if i > 24.hours.ago }.count
  end


end
