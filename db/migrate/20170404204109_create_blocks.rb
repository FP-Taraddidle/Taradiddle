class CreateBlocks < ActiveRecord::Migration[5.0]
  def change
    create_table :blocks do |t|
      t.references :routine, foreign_key: true
      t.string :difficulty

      t.timestamps
    end
  end
end
