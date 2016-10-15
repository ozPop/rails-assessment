class UsersController < ApplicationController
  def index
    @users = User.all
    @sellers = User.all.find_by(seller: true)
  end

  def show
    @user = User.find_by(id: params[:id])
    return redirect_to users_path unless @user
    @artworks = @user.artworks
  end
end
