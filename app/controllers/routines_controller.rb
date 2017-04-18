class RoutinesController < ApplicationController

  def show

  end

  def create
    @new_routine = Routine.new
    @new_routine.user = current_user
    @new_routine.save!

    @tweets = @new_routine.user.twitterings.last.tweets
    @likes = @new_routine.user.twitterings.last.likes
    @block_count = @tweets + @likes

    @product = random_blocks.sample(@block_count).each {|x| @new_routine.blocks << x}
    render json: @new_routine
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
