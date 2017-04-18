class Routine < ApplicationRecord
  belongs_to :user

  has_many :blockings
  has_many :blocks, through: :blockings

  has_many :exercises, through: :blocks

end
