class OrdersController < ApplicationController
  before_action :set_order, only: [:show, :checkout]

  def show
    # render order show page
  end

  def checkout
    @order.checkout
    redirect_to root_path, notice: "You've successfully checked out"
  end

  private

  def set_order
    @order = Order.find_by(id: params[:id])
  end
end
