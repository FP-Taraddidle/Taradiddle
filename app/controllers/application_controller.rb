require 'twitter'
class ApplicationController < ActionController::Base

  def current_user
    @current_user ||= User.find_by(token: params[:token])
    # Since user sessions are not created by us, we have to define current user through the oauth token
    # gathered through the omniauth gem
  end

  def twitter_client
    Twitter::REST::Client.new do |config|
      config.consumer_key        = ENV["TWITTER_CONSUMER_KEY"]
      config.consumer_secret     = ENV["TWITTER_CONSUMER_SECRET"]
      # Through the Twitter gem, this will allow us to pull user's
      # information from twitter using any of the established
      # methods within the gem
      # http://www.rubydoc.info/gems/twitter
    end
  end

  def static
    render file: 'public/index.html'
  end

end
