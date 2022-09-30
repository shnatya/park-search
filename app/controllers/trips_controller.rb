class TripsController < ApplicationController
    before_action :authorized, only: [:create, :index]
    before_action :find_trip, only: [:destroy, :update]
    before_action :find_user, only: [:create, :index]

    #GET "/users/trips" 
    def index
        trips = @user.trips
        render json: trips
    end

    #POST "/trips"
    def create
        trip = Trip.create!(trip_params)
        render json: trip
    end

    #PATCH "/trips/:id"
    def update
        if @trip[:user_id] == session[:user_id]
            @trip.update!(trip_params)
            render json: @trip
        else
           render json: {errors: ["Not authorized to update this trip!"]}, status: :unauthorized
        end
    end 

    #DELETE "/trips/:id"
    def destroy
        @trip.destroy
        render json: @trip
    end

    private 

    def trip_params
        params.permit(:id, :comment, :visited_at, :review, :facility_id, :user_id)
    end
   
    def find_trip
        @trip = Trip.find(params[:id])
    end

    def find_user
        @user = User.find_by_id(session[:user_id])
    end

    def authorized
        render json: {errors: ["Not authorized"]}, status: :unauthorized unless session.include? :user_id
    end
end
