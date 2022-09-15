class FacilitiesController < ApplicationController
    #GET "/facilities"
    def index 
        facilities = Facility.all.order(:name)
        render json: facilities
    end
end
