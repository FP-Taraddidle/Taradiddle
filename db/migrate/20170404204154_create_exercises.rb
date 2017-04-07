class CreateExercises < ActiveRecord::Migration[5.0]
  def change
    create_table :exercises do |t|
      t.string :name
      t.integer :reps
      t.integer :duration_in_seconds
      t.text :description
      t.string :picture
      t.references :block, foreign_key: true

      t.timestamps
    end
  end
end
