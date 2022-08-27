class ActivityFacilitySerializer < ActiveModel::Serializer
  attributes :id
  has_one :activity
  has_one :facility
end
