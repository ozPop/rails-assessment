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
      format.html {} # implicit rendering
      format.json do
        # render user, along with sales and purchases
        render json: @user, adapter: :json
      end
    end
  end

  def sales
    artist = User.find_by(id: params[:id])
    render json: artist.sold_artworks
  end

  def purchases
    user = User.find_by(id: params[:id])
    render json: user.bought_artworks
  end
end
