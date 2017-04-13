class Routine < ApplicationRecord
  belongs_to :user
  has_many :blocks
  has_many :exercises, through: :blocks

end
