class ArtworksController < ApplicationController
  before_action :set_artwork, only: [:show, :edit, :update, :destroy]

  def index
    if params[:user_id]
      artist = User.find_by(id: params[:user_id])
      if artist.nil?
        redirect_to users_path, alert: 'User not found'
      else
        @artworks = artist.artworks
      end
    else
      @artworks = Artwork.all
    end
  end

  def new
    if params[:user_id] && !User.exists?(params[:user_id])
      redirect_to users_path, alert: "Artist not found."
    else
      @artwork = Artwork.new(artist_id: params[:user_id])
    end
  end

  def create
    @artwork = current_user.artworks.build(artwork_params)
    if @artwork.save
      redirect_to user_artworks_path(current_user), notice: 'Successfuly added artwork'
    else
      render 'new'
    end
  end

  def show
    if params[:user_id]
      @artist = User.find_by(id: params[:user_id])
      @artwork = @artist.artworks.find_by(id: params[:id])
      if @artwork.nil?
        redirect_to user_artworks_path(@artist), alert: "Artwork not found"
      end
    else
      @artwork = Artwork.find(params[:id])
    end
  end

  def edit
    if params[:user_id]
      # @nested = true
      artist = User.find_by(id: params[:user_id])
      if artist.nil?
        redirect_to users_path, alert: "User not found."
      elsif user_signed_in? && current_user.id == params[:user_id]
        @artwork = artist.artworks.find_by(id: params[:id])
        redirect_to user_artworks_path(artist), alert: "Artwork not found." if @artwork.nil?
      else
        redirect_to root_path, alert: "You don't have access to this page."
      end
    else
      redirect_to root_path, alert: "You don't have access to this page."
    end
  end

  def update
    @artwork.update(artwork_params)
    if @artwork.save
      redirect_to @artwork, notice: 'Artwork updated.'
    else
      render :edit
    end
  end

  def destroy
    @artwork.destroy
    redirect_to artworks_path, notice: 'Artwork deleted.'
  end

  private

  def set_artwork
    @artwork = Artwork.find_by(id: params[:id])
  end

  def artwork_params
    params.require(:artwork).permit(:title, :description, :price, :category_id, :inventory, :image)
  end
end
