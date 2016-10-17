class OrderItemsController < ApplicationController
  def create
    current_user.create_current_order unless current_user.current_order
    order_item = current_user.current_order.add_item(params[:artwork_id])
    if order_item.save
      redirect_to order_path(current_user.current_order), {notice: 'Item added to order!'}
    else
      redirect_to artworks_path, {notice: 'Unable to add item'}
    end
  end

  def destroy
    current_user.current_order.remove_item(params[:artwork_id])
    if current_user.current_order.items.empty?
      current_user.remove_order
      redirect_to artworks_path, {notice: 'Removed all order items'}
    else
      redirect_to order_path(current_user.current_order), {notice: 'Removed item'}
    end
  end
end
