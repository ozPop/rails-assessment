Rails.application.routes.draw do

  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks'}

  root to: 'welcome#index'

  resources :users do
    resources :artworks, only: [:index, :show, :new, :edit]
  end

  resources :artworks, only: :index

  resources :orders

  post '/order/:id/checkout', to: 'orders#checkout', as: 'checkout'

  resources :order_items, only: [:create]

  delete '/order_items', to: 'order_items#destroy'

  # Catch-all route, redirects to root
  match '*path', to: redirect('/'), via: :all


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
