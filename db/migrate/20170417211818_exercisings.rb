class Exercisings < ActiveRecord::Migration[5.0]
  def change
    create_table :exercisings do |t|
      t.references :exercise, foreign_key: true
      t.references :block, foreign_key: true

      t.timestamps

    end
  end
end
