class CreateCows < ActiveRecord::Migration
  def change
    create_table :cows do |t|
      t.string :name
      t.integer :age
      t.string :breed

      t.timestamps
    end
  end
end
