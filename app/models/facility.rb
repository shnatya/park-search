class Facility < ApplicationRecord
    has_many :activity_facilities
    has_many :activities, through: :activity_facilities
end
