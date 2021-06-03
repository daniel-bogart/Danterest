class Api::SessionsController < ApplicationController

  skip_before_action :verify_authenticity_token

  def create
    @user = User.find_by_credentials(
      params[:user][:email], 
      params[:user][:password]
      )
    if @user.nil?
      render json: ['Incorrect email or password'], status: 401
    else
      login!(@user)
      render 'api/users/show';
    end
  end

  def destroy
    if @current_user
    logout!
    render json: { message: 'Logout successful!' }
    else
      render json: @user.errors.full_messages, status: 404
    end
  end
end
