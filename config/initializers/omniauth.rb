Rails.application.config.middleware.use OmniAuth::Builder do
  # provider :developer unless Rails.env.production?
  provider :twitter, ENV['TWITTER_CONSUMER_KEY'], ENV['TWITTER_CONSUMER_SECRET']
    {
       :secure_image_url => 'true',
       :image_size => 'original',
       :authorize_params => {
         :force_login => 'true',
         :lang => 'pt'
       }
     }

  provider :instagram, ENV['INSTAGRAM_ID'], ENV['INSTAGRAM_SECRET']
    {
      scope: 'basic public_content follower_list comments relationships likes'
    }
end
