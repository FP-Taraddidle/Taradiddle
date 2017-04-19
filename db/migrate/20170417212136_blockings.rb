class Blockings < ActiveRecord::Migration[5.0]
  def change
    create_table :blockings do |t|
      t.references :routine, foreign_key: true
      t.references :block, foreign_key: true

      t.timestamps

    end
  end
end
