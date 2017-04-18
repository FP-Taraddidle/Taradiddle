class Leveling < ApplicationRecord
  belongs_to :user
  belongs_to :intensity
end
