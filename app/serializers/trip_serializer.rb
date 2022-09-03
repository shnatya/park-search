class TripSerializer < ActiveModel::Serializer
  attributes :id, :comment, :visited_at, :review
  has_one :user
  has_one :facility
end
