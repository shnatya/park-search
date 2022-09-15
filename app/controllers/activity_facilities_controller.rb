class ActivityFacilitiesController < ApplicationController
    #GET "/activity_facilities"
    def index
        activity_facilities = ActivityFacility.all
        render json: activity_facilities
    end
end
