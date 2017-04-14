class Block < ApplicationRecord
  belongs_to :routine
  belongs_to :exercises
end
