class Exercise < ApplicationRecord
  has_many :blocks
  has_many :routines, through: :blocks
end
