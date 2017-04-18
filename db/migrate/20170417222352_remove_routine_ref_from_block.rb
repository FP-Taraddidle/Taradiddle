class RemoveRoutineRefFromBlock < ActiveRecord::Migration[5.0]
  def change
    remove_reference :blocks, :routine, foreign_key: true
  end
end
