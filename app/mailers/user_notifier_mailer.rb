class UserNotifierMailer < ApplicationMailer

  default :from => 'any_from_address@example.com'

  # send a signup email to the user, pass in the user object that   contains the user's email address
  def send_email(user, tweets, likes)
    @user = user
    @tweets = tweets
    @likes = likes
    mail( :to => @user.email,
    :subject => 'Here is Your Routine for Today' )
  end
end
