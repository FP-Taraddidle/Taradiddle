class RoutinesController < ApplicationController

  def show

  end

  def create
   @user = User.all
   @routines = @user.collect do |y|
      @new_routine = Routine.new
      @new_routine.user = y
      @new_routine.save!
      @tweets = @new_routine.user.twitterings.last.tweets
      @likes = @new_routine.user.twitterings.last.likes
      @block_count = @tweets + @likes
      @product = random_blocks.sample(@block_count).each {|x| @new_routine.blocks << x}
    end

    render json: @routines
  end

  def show
    if current_user
      @routine = current_user.routines.last.exercises
    end
    render json: @routine
  end


  def random_blocks
    Block.all.to_a
  end

end
