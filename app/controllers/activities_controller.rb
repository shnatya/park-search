class ActivitiesController < ApplicationController
    #GET "/activities"
    def index 
        activities = Activity.all.order(:name)
        render json: activities
    end

end
