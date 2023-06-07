Rails.application.routes.draw do
  root 'home#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/about', to: 'home#about'
  get '/works', to: 'home#works'
  get '/contact', to: 'home#contact'
end
