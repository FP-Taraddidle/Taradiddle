class Twittering < ApplicationRecord
  belongs_to :user

  def self.liking
    user = User.find(params[:id])
    like_arr = twitter_client.favorites(user.name, count: 20).collect{|i| i.created_at}
    @likes = like_arr.select { |i| i if i > 24.hours.ago }.count
  end

  def self.tweeting
    user = User.find(params[:id])
    tweet_arr = twitter_client.user_timeline(user.name, count: 20).collect{|i| i.created_at}
    @tweets = tweet_arr.select { |i| i if i > 24.hours.ago }.count
  end

end
