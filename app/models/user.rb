class User < ApplicationRecord

  has_many :authorizations, dependent: :destroy
  has_many :routines, dependent: :destroy
  has_many :twitterings, dependent: :destroy
  belongs_to :intensity, optional: true
  has_secure_token
  # validates :name, :email, :presence => true


end
