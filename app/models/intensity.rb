class Intensity < ApplicationRecord
  has_many :users
  has_many :users, through: :levelings
end
