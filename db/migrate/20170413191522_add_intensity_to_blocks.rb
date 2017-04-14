class AddIntensityToBlocks < ActiveRecord::Migration[5.0]
  def change
    add_reference :blocks, :intensity, foreign_key: true
  end
end
