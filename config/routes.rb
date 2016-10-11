Rails.application.routes.draw do

  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks'}

  root to: 'welcome#index'

  resources :users do
    resources :artworks, only: [:show, :index]
  end

  resources :artworks

  resources :orders, only: [:show]

  post '/order/:id/checkout', to: 'orders#checkout', as: 'checkout'

  resources :order_items, only: [:create]

  delete '/order_items', to: 'order_items#destroy'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
