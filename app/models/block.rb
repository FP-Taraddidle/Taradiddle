class Block < ApplicationRecord
  belongs_to :routine
  has_many :exercises
end
