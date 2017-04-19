class UsersSerializer < ActiveModel::Serializer
  attributes :id, :name, :intensity_id
  belongs_to :intensity, optional: true
  class IntensitySerializer < ActiveModel::Serializer
    attributes :id, :name, :level
  end
end
