class BlocksController < ApplicationController

  def create

  end

  def show
    @block  = Block.find(params[:id])
    render json: @block.exercises
  end

private

  def params_permit
    params.permit
  end

end
