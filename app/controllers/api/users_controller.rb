class Api::UsersController < ApplicationController

  skip_before_action :verify_authenticity_token
  
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end
  
  def update
    @user = selected_user
    if @user
      @user.update({username: params[:user][:username], first_name: params[:user][:firstName], last_name: params[:user][:lastName], pronouns: params[:user][:pronouns]})
  
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end
  
  def show
    @user = selected_user

    render :show
  end
  
  def index
    @users = User.all
    render "api/users/index"
  end
  
  def destroy
    @user = selected_user
    if @user
      @user.destroy
      render :show
    else
      render ['Could not find user']
    end
  end
  
  private
  
  def selected_user
    User.find(params[:id])
  end
  
  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :age, :first_name, :last_name, :pronouns, :photo)
  end
end
