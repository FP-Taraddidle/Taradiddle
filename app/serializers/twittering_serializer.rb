class TwitteringSerializer < ActiveModel::Serializer
  attributes :id, :tweets, :likes
  has_one :user
end
