class RemoveBlockRefFromExercises < ActiveRecord::Migration[5.0]
  def change
    remove_reference :exercises, :block, foreign_key: true
  end
end
