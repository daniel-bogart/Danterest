Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users
    resource :session, only: [:create, :destroy]
    resources :pins, only: [:show, :create, :index, :update, :destroy]
    resources :boards, only: [:create, :destroy, :index, :update]
  end
  root to: "static_pages#root"
end
