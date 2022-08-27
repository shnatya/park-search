# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'json' 

puts "Seeding facilities..."
Facility.destroy_all
facility_hash = []
limit = 1000
offset = 0
max_records = 1000
cur_records = 0
while (true) do
# make a request to the endpoint:
response = RestClient.get "https://ridb.recreation.gov/api/v1/facilities?limit=#{limit}&offset=#{offset}", headers={apikey: '39051e7d-45e8-4b59-b80f-4f6511c2fbe6'} 
  # the response will come back as a JSON-formatted string.
  # using JSON.parse to convert this string to a Ruby hash:
  tmp_hash = JSON.parse(response)
  facility_hash += tmp_hash["RECDATA"]

  if (tmp_hash["RECDATA"].size < limit) || (cur_records >= max_records) 
      break
  end

  offset += limit
  cur_records += limit

end

facility_hash.each do |facility|
    Facility.create(
      name: facility["FacilityName"],
      description: facility["FacilityDescription"],
      facility_code: facility["FacilityID"]
  )
end

puts "Done seeding facilities!"



puts "Seeding activities..."
Activity.destroy_all
response = RestClient.get "https://ridb.recreation.gov/api/v1/activities?", headers={apikey: '39051e7d-45e8-4b59-b80f-4f6511c2fbe6'}
activity_hash = JSON.parse(response)

activity_hash["RECDATA"].each do |activity|
  Activity.create(
    name: activity["ActivityName"],
    activity_code: activity["ActivityID"]
)
end
puts "Done seeding activities!"

puts "Seeding activity_facility..."


class String
  def is_integer?
    self.to_i.to_s == self
  end
end

activity_facility = JSON.parse(File.read('db/ribd/EntityActivities_API_v1.json'))

activity_facility["RECDATA"].each do |entry|
  if !entry["EntityID"].is_integer?
    continue
  end

  tmp = entry["EntityID"]
  puts "#{tmp}"
  facility = Facility.find_by_facility_code(tmp)
  if facility 
    primary_facility_id = facility[:id]

    activity = Activity.find_by_activity_code(entry["ActivityID"])
    primary_activity_id = activity[:id]

    ActivityFacility.create(
      facility_id: primary_facility_id,
      activity_id: primary_activity_id
    )
  end
end

puts "Done seeding activity_facility!"
#some facilities are useless. they dont have activities assighned.