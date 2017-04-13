class RemoveRepsFromExercises < ActiveRecord::Migration[5.0]
  def change
    remove_column :exercises, :reps, :integer
    remove_column :exercises, :duration_in_seconds, :integer
  end
end
