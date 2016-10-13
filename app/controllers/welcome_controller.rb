class WelcomeController < ApplicationController
  def index
    @artworks = Artwork.most_popular
  end
end
