class TwitteringsController < ApplicationController

  def create

    @user = User.all
    @tweeter = @user.collect { |e|
      @twitter = Twittering.new
      @twitter.user = e
      @twitter.tweets = tweeting
      @twitter.likes = liking
      if @twitter.save!
        # Deliver the signup email
        UserNotifierMailer.send_email(e, @twitter).deliver
        @twitter
      else
        {error: "@twitter failed to save in Twitterings#Create"}
      end
     }
    # user = User.find(params[:id])
    # @twitter = Twittering.new
    # @twitter.user = user
    # @twitter.tweets = tweeting
    # @twitter.likes = liking
    # @twitter.save!
    render json: @tweeter
  end

  def index
    if current_user
      @twittering = current_user.twitterings
    end
    render json: @twittering
  end

  def show
    if current_user
      @twittering = current_user.twitterings.last
    end
    render json: @twittering
  end

  def tweeting
    user = User.find(@twitter.user_id)
    tweet_arr = twitter_client.user_timeline(user.name, count: 200).collect{|i| i.created_at}
    @tweets = tweet_arr.select { |i| i if i > 24.hours.ago }.count
  end


  def liking
    user = User.find(@twitter.user_id)
    like_arr = twitter_client.favorites(user.name, count: 100).collect{|i| i.created_at}
    @likes = like_arr.select { |i| i if i > 24.hours.ago }.count
    # using the twitter client from application controller,
    # find the favorites for the user using the user's name as the identifier,
    # limit the count tot he maximum (100),
    # collect all the tweets by their creaded at and store them in the array
    # take all the created at dates and only pick out the ones that have
    # a created at dat greater than the specified time
    # count those values
  end

end
