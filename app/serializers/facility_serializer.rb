class FacilitySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :short_description, :all_activities
end
