class FacilitiesController < ApplicationController
    #GET "/facilities"
    def index 
        facilities = Facility.all
        render json: facilities, methods: [:short_description]
        
    end
end
