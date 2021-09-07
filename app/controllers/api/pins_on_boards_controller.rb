class Api::PinsOnBoardsController < ApplicationController

  def create
    @pin_on_board = PinsOnBoard.create(pin_on_board_params)
    if @pin_on_board.save
      @pin = Pin.find(params[:pin_on_board][:pin_id])
      PinsOnBoard.create(params[:pin][:board_id], @pin.id)
      render "api/pins/show"
    #else
    #  render json: @board_pin.errors.full_messages, status: 404
    end
  end

  def destroy
    @pin_on_board = PinsOnBoard.find_by(pin_id: params[:id])
    if @pin_on_board.destroy
      render json: @pin_on_board.id 
    #else
      #render json: @pin_on_board.errors.full_messages, status: 422
    #end
    end
  end

  def index
    @pins_on_boards = PinsOnBoard.all
    render "api/pins_on_boards/index"
  end

  private
  def pin_on_board_params
    params.require(:pin_on_board).permit(:pin_id, :board_id)
  end
end
