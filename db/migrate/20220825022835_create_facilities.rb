class CreateFacilities < ActiveRecord::Migration[7.0]
  def change
    create_table :facilities do |t|
      t.string :name
      t.string :description
      t.string :facility_code
      t.timestamps
    end
  end
end
