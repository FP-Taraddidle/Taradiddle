class UserNotifierMailer < ApplicationMailer

  default :from => 'any_from_address@example.com'

  # send a signup email to the user, pass in the user object that   contains the user's email address
  def send_email(user, twittering)
    @user = user
    @twittering = twittering
    mail( :to => @user.email,
    :subject => 'Here is Your Routine for Today' )
  end
end
