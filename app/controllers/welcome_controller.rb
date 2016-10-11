class WelcomeController < ApplicationController
  def index
    @artworks = Artwork.all.reverse
  end
end
