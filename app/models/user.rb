class User < ApplicationRecord

  has_many :authorizations
  has_many :routines
  has_many :twitterings
  # validates :name, :email, :presence => true
end
