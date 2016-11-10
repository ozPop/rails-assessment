class UsersController < ApplicationController
  def index
    @users = User.all
    @sellers = User.where(seller: true)
  end

  def show
    @user = User.find_by(id: params[:id])
    return redirect_to users_path unless @user
    # flag user as owner for displaying of artwork-controls
    @user.owner = true if @user == current_user
    respond_to do |format|
    # handle based on type of request
    format.html {
      # implicit rendering
    }
    format.json { 
      # render user, along with sales and purchases
      render json: @user, adapter: :json
     }
    end
  end

  def sales
    artist = User.find_by(id: params[:id])
    render json: artist.sales.map(&:artwork), adapter: :json
  end

  def purchases
    artist = User.find_by(id: params[:id])
    render json: artist.purchases.map(&:artwork), adapter: :json
  end
end
