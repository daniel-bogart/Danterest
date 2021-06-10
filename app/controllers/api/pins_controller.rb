class Api::PinsController < ApplicationController
  before_action :require_logged_in, only: [:index]

  def show
    @pin = Pin.find(params[:id])
    render :show
  end

  def index
    @pins = Pin.all
    render :index
  end

  def create
    @pin = Pin.new(pin_params)
    @pin.user_id = current_user.id
      if @pin.save
        render :show
      else
        render json: @pin.errors.full_messages, status: 404
      end
  end

  def destroy
    @pin = Pin.find_by(id: params[:id])
      if @pin && @pin.destroy
        render json: @pin.id 
      else
        render json: @pin.errors.full_messages, status: 422
      end
  end

  def update
    @pin = current_user.pins.find_by(id: params[:id])
      if @pin && @pin.update(pin_params)
        render :show
      else
        render json: @pin.errors.full_messages, status: 422
      end
  end



  private
  def pin_params
    params.require(:pin).permit(:photo, :title, :description)
  end
end
