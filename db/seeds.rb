# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'json' 

puts "Seeding FacilityCopy..."
Facility.destroy_all
facility_copy = []
limit = 200
offset = 0
max_records = 200
cur_records = 0
while (true) do
# make a request to the endpoint:
response = RestClient.get "https://ridb.recreation.gov/api/v1/facilities?limit=#{limit}&offset=#{offset}", headers={apikey: '39051e7d-45e8-4b59-b80f-4f6511c2fbe6'} 
  # the response will come back as a JSON-formatted string.
  # using JSON.parse to convert this string to a Ruby hash:
  tmp_hash = JSON.parse(response)
  facility_copy += tmp_hash["RECDATA"]

  if (tmp_hash["RECDATA"].size < limit) || (cur_records >= max_records) 
      break
  end

  offset += limit
  cur_records += limit

end

facility_copy.each do |facility|
    FacilityCopy.create(
      name: facility["FacilityName"],
      description: facility["FacilityDescription"],
      facility_code: facility["FacilityID"]
  )
end

puts "Done seeding FacilityCopy!"



puts "Seeding Activity..."
Activity.destroy_all
response = RestClient.get "https://ridb.recreation.gov/api/v1/activities?", headers={apikey: '39051e7d-45e8-4b59-b80f-4f6511c2fbe6'}
activity_hash = JSON.parse(response)

activity_hash["RECDATA"].each do |activity|
  Activity.create(
    name: activity["ActivityName"],
    activity_code: activity["ActivityID"]
)
end
puts "Done seeding Activity!"

puts "Seeding ActivityFacility and Facility..."
ActivityFacility.destroy_all
Facility.destroy_all

activity_facility = JSON.parse(File.read('db/ribd/EntityActivities_API_v1.json'))

activity_facility["RECDATA"].each do |entry|
  activity = Activity.find_by_activity_code(entry["ActivityID"])
  primary_activity_id = activity.id
 
  facility_copy = FacilityCopy.find_by_facility_code(entry["EntityID"])
  if facility_copy
    #need to check if this facility code is already in the table, because activity_facility
    #file has several records for the same facility_code with different activities
    if Facility.exists?(:facility_code => entry["EntityID"])
      facility = Facility.find_by_facility_code(entry["EntityID"])
      primary_facility_id = facility.id
    else
      facility = Facility.create(
        name: facility_copy.name,
        description: facility_copy.description,
        facility_code: facility_copy.facility_code
    )
      primary_facility_id = facility.id
    end

  ActivityFacility.create(
    facility_id: primary_facility_id,
    activity_id: primary_activity_id
  )
  end
end
#FacilityCopy.destroy_all
puts "Done seeding ActivityFacility and Facility!"
