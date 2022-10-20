class FacilitySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :all_activities, :short_description
end
