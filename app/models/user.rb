class User < ApplicationRecord

  has_many :authorizations
  has_many :routines
  # validates :name, :email, :presence => true
end
