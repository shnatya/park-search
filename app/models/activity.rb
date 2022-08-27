class Activity < ApplicationRecord
    has_many :activity_facilities
    has_many :facilities, through: :activity_facilities
end
