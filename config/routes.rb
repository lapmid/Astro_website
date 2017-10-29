Rails.application.routes.draw do
  resources :comments
    
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  resources :posts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    root "astro#home"
    get 'index2.html', to: 'astro#index2'
    get 'index.html', to: 'astro#home'
    
end
