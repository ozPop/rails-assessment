class OrderItemsController < ApplicationController
  def create
    current_user.create_current_order unless current_user.current_order
    order_item = current_user.current_order.add_item(params[:item_id])
    if order_item.save
      redirect_to order_path(current_user.current_order), {notice: 'Item added to order!'}
    else
      redirect_to root_path, {notice: 'Unable to add item'}
    end
  end
end
