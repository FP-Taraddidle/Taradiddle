class AddUserOauthTokenToAuthorizations < ActiveRecord::Migration[5.0]
  def change
    add_column :authorizations, :user_oauth_token, :string
    add_column :authorizations, :user_oauth_secret, :string
  end
end
