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
    @artwork = Artwork.new
  end

  def create
    @artwork = current_user.artworks.build(artwork_params)
    if @artwork.save
      redirect_to artwork_path(@artwork), notice: 'Successfuly added artwork'
    else
      render 'new'
    end
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def set_artwork
    @artwork = Artwork.find_by(id: params[:id])
  end

  def artwork_params
    params.require(:artwork).permit(:title, :description, :price, :category_id, :inventory, :image)
  end
end
