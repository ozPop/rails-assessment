class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = User.find_by(id: params[:id])
    return redirect_to users_path unless @user
    @artworks = @user.artworks
  end
end
