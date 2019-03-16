class CreateStadiums < ActiveRecord::Migration[5.2]
  def change
    create_table :stadiums do |t|
      t.string :name
      
      t.timestamps
    end
  end
end
