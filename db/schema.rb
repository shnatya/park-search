# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_08_27_051145) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activities", force: :cascade do |t|
    t.string "name"
    t.integer "activity_code"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "activity_facilities", force: :cascade do |t|
    t.bigint "activity_id", null: false
    t.bigint "facility_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["activity_id"], name: "index_activity_facilities_on_activity_id"
    t.index ["facility_id"], name: "index_activity_facilities_on_facility_id"
  end

  create_table "facilities", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "facility_code"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "activity_facilities", "activities"
  add_foreign_key "activity_facilities", "facilities"
end
