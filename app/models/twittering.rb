class Twittering < ApplicationRecord
  belongs_to :user

  def self.twitter_client
    Twitter::REST::Client.new do |config|
      config.consumer_key        = ENV["TWITTER_CONSUMER_KEY"]
      config.consumer_secret     = ENV["TWITTER_CONSUMER_SECRET"]
      # Through the Twitter gem, this will allow us to pull user's
      # information from twitter using any of the established
      # methods within the gem
      # http://www.rubydoc.info/gems/twitter
    end
  end

  def self.pull

    @user = User.all
    @tweeter = @user.collect { |e|
      @twitter = Twittering.new
      @twitter.user = e
      @twitter.tweets = tweeting
      @twitter.likes = liking
      if @twitter.save!
        @twitter
      else
        {error: "@twitter failed to save in Twitterings#Create"}
      end
     }

  end

  def self.tweeting
    user = User.find(@twitter.user_id)
    tweet_arr = twitter_client.user_timeline(user.name, count: 200).collect{|i| i.created_at}
    @tweets = tweet_arr.select { |i| i if i > 24.hours.ago }.count
  end


  def self.liking
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
