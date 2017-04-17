class RoutinesController < ApplicationController

  def random_routine_assignment
    random_exercise_blocks
    ro_arr = []
    ro_arr << random_exercise_blocks.sample
    unique = (random_exercise_blocks - ro_arr).sample
    ro_arr << unique
  end

  def reps
    @level = Intensity.find(params[:id]).level
    user = User.find(params[:id])
    @count = 60/user.intensity
  end

end
