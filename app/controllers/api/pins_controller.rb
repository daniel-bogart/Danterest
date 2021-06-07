class Api::PinsController < ApplicationController
  def show
    @pin = Pin.find(params[:id])
    render :show
  end

  def pin_params
    params.require(:pin).permit(:author_id, :title, :description)
  end
end
