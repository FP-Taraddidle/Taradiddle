class Block < ApplicationRecord
  belongs_to :routine, optional: true
  has_many :routines, through: :blockings

  has_many :exercisings
  has_many :exercises, through: :exercisings
end
