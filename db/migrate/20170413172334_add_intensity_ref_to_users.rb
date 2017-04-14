class AddIntensityRefToUsers < ActiveRecord::Migration[5.0]
  def change
    add_reference :users, :intensity, foreign_key: true
  end
end
