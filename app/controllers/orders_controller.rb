class OrdersController < ApplicationController
  before_action :set_order, only: [:show, :checkout, :update]

  def show
    # render order show page
  end

  def update
    @order.update(order_params)
    redirect_to order_path(@order), notice: "You've successfully updated quanitity"
    # raise 'stop'.inspect
  end

  def checkout
    @order.checkout
    redirect_to root_path, notice: "You've successfully checked out"
  end

  private

  def set_order
    @order = Order.find_by(id: params[:id])
  end

  def order_params
    params.require(:order).permit(order_items_attributes: [:id, :quantity])
  end
end
