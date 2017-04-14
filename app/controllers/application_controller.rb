require 'twitter'
class ApplicationController < ActionController::Base

  def current_user
    @current_user ||= User.find_by(oauth_token: params[:oauth_token]) if params[:oauth_token]
  end

  def twitter_client
    Twitter::REST::Client.new do |config|
      config.consumer_key        = ENV["TWITTER_CONSUMER_KEY"]
      config.consumer_secret     = ENV["TWITTER_CONSUMER_SECRET"]
    end
  end

  def static
    render file: 'public/index.html'
  end

end
