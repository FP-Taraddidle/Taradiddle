class RoutinesController < ApplicationController

  def show

  end

  def random_routine_assignment
    random_exercise_blocks
    ro_arr = []
    ro_arr << random_exercise_blocks.sample
    unique = (random_exercise_blocks - ro_arr).sample
    ro_arr << unique
  end

  def reps
    @user = User.find(params[:id])
    @level = Intensity.find(params[:id]).level
    @count = 60/user.intensity
  end

end
