class CreateActivityFacilities < ActiveRecord::Migration[7.0]
  def change
    create_table :activity_facilities do |t|
      t.references :activity, null: false, foreign_key: true
      t.references :facility, null: false, foreign_key: true

      t.timestamps
    end
  end
end
