class UsersController < ApplicationController
  def index
    @users = User.all
    @sellers = User.where(seller: true)
  end

  def show
    @user = User.find_by(id: params[:id])
    return redirect_to users_path unless @user
    
    respond_to do |format|
    # handle based on type of request
    format.html {
      @artworks = @user.artworks
    }
    format.json { 
      if params[:type] == 'sales'
        @artworks = @user.sales.map(&:artwork)
      else
        @artworks = @user.purchases.map(&:artwork)
      end
      render json: @artworks
     }
    end
  end
end
