Rails.application.routes.draw do

  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks'}

  root to: 'welcome#index'

  resources :users do
    # We need all actions available for this nested resource
    resources :artworks
  end

  # routes for json
  get '/users/:id/sales', to: 'users#sales'
  get '/users/:id/purchases', to: 'users#purchases'

  # This might need to allow for :index only
  resources :artworks, only: [:index]

  resources :orders

  post '/order/:id/checkout', to: 'orders#checkout', as: 'checkout'

  resources :order_items, only: [:create]

  delete '/order_items', to: 'order_items#destroy'

  # Catch-all route, redirects to root
  match '*path', to: redirect('/'), via: :all


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
