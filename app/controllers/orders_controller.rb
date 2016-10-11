class OrdersController < ApplicationController
  before_action :set_order, only: [:show]

  def show
    # render order show page
  end

  private

  def set_order
    @order = Order.find_by(id: params[:id])
  end

end
