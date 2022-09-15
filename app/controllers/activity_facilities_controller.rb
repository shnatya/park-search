class ActivityFacilitiesController < ApplicationController
    #GET "/activity_facilities"
    def index
        activity_facilities = ActivityFacility.all
        render json: activity_facilities, methods: [:short_description]
    end
end
