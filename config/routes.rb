Rails.application.routes.draw do

  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks'}

  root to: 'welcome#index'

  resources :users do
    resources :artworks, only: [:show, :index]
  end

  resources :artworks

  resources :order_items, only: [:create]

  resources :orders

  post '/order/:id/checkout', to: 'orders#checkout', as: 'checkout'

  #delete '/order_items/:id', to: 'orders#checkout'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
