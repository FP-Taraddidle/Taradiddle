class IntensitiesController < ApplicationController

  def show
    @intensities = Intensity.all
    render json: @intensities
  end
end
