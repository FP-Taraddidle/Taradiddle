class AddNameToIntensities < ActiveRecord::Migration[5.0]
  def change
    add_column :intensities, :name, :string
  end
end
