class Exercise < ApplicationRecord
  has_many :blocks
  has_many :blocks, through: :blockings

end
