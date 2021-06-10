Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users do
      resources :boards, only: [:index, :create, :destroy, :update, :show]
      resources :pins, only: [:create, :index]
    end
    resource :session, only: [:create, :destroy]
    resources :pins, only: [:show, :index, :update, :destroy]
    resources :boards, only: [:show]
  end
  root to: "static_pages#root"
end
