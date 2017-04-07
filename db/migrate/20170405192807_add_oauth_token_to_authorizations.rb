class AddOauthTokenToAuthorizations < ActiveRecord::Migration[5.0]
  def change
    add_column :authorizations, :oauth_token, :string
    add_column :authorizations, :oauth_verifier, :string
  end
end
