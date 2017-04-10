class CreateTwitterData < ActiveRecord::Migration[5.0]
  def change
    create_table :twitter_data do |t|
      t.references :user, foreign_key: true
      t.integer :tweets
      t.integer :likes

      t.timestamps
    end
  end
end
