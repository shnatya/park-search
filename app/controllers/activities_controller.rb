class ActivitiesController < ApplicationController
    #GET "/activities"
    def index 
        activities = Activity.all
        render json: activities.first
    end

end
