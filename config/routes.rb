Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :create, :update] do
      resources :boards, only: [:index, :create, :destroy, :update, :show]
    end
    resource :session, only: [:create, :destroy]
    resources :pins, only: [:create, :show, :index, :update, :destroy]
    resources :boards, only: [:show] do
      resources :pins, only: [:index]
    end
    resources :pins_on_boards, only: [:create, :destroy, :show]
  end
  root to: "static_pages#root"
end
