class Twittering < ApplicationRecord
  belongs_to :user

  def self.liking
    user = User.find(params[:id])
    like_arr = twitter_client.favorites(user.name, count: 100).collect{|i| i.created_at}
    # using the twitter client from application controller,
    # find the favorites for the user using the user's name as the identifier,
    # limit the count tot he maximum (100),
    # collect all the tweets by their creaded at and store them in the array
    @likes = like_arr.select { |i| i if i > 24.hours.ago }.count
    # take all the created at dates and only pick out the ones that have
    # a created at dat greater than the specified time
    # count those values
  end

  def self.tweeting
    user = User.find(params[:id])
    tweet_arr = twitter_client.user_timeline(user.name, count: 200).collect{|i| i.created_at}
    @tweets = tweet_arr.select { |i| i if i > 24.hours.ago }.count
  end

end
