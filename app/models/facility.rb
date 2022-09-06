class Facility < ApplicationRecord
    has_many :activity_facilities
    has_many :activities, through: :activity_facilities
    has_many :trips
    has_many :users, through: :trips

    validates :facility_code, uniqueness: true
end
