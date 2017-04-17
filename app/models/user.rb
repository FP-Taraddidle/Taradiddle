class User < ApplicationRecord

  has_many :authorizations
  has_many :routines
  has_many :twitterings
  has_secure_token
  # validates :name, :email, :presence => true
end
