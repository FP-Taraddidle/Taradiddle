require 'twitter'
class ApplicationController < ActionController::Base

  def current_user
    @current_user ||= User.find_by(api_token: params[:api_token]) if params[:api_token]
  end

  def twitter_client
    Twitter::REST::Client.new do |config|
      config.consumer_key        = ENV["TWITTER_CONSUMER_KEY"]
      config.consumer_secret     = ENV["TWITTER_CONSUMER_SECRET"]
    end
  end

end
