class Block < ApplicationRecord
  belongs_to :routine
  belongs_to :exercises
  has_many :exercises
end
