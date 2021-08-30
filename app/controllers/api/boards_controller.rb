class Api::BoardsController < ApplicationController

  # require logged_in?: :create
  # before_action :require_logged_in, only: [:create]
  skip_before_action :verify_authenticity_token

  def show
    @board = Board.find_by(id: params[:id])
    render :show
  end

  def index
    # @user = User.find_by(id: params[:id])
    @boards = current_user.boards
    render :index
  end

  def create
    @board = Board.new(board_params)
    @board.user_id = params[:user_id]
      if @board.save
        render "api/boards/show"
      else
        render json: @board.errors.full_messages, status: 422
      end
  end

  def destroy
    @board = Board.find_by(id: params[:id])
      if @board && @board.destroy
        render json: @board.id
      else
        render json: @board.errors.full_messages, status: 422
      end
  end

  def update
    @board = Board.find_by(id: params[:id])
    if @board && @board.user_id == current_user.id 
      if @board.update(board_params)
        render :show
      else
        render json: @board.errors.full_messages, status: 422
      end 
    end
  end

  # def update
  #   @board = Board.find_by(id: params[:id])
  #     if @board && @board.update(board_params)
  #       render :show
  #     else
  #       render json: @board.errors.full_messages, status: 422
  #     end
  # end

  private
  def board_params
    params.require(:board).permit(:title, :description)
  end
end
