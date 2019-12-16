Rails.application.routes.draw do
  resources :messages
  1.upto(18) do |n|
    get "home/step#{n}" => "home#step#{n}"
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "home/vuex-books" => "home#vuex-books"
  get "home/vuex-module" => "home#vuex-module"
  get "home/reading-recorder" => "home#reading-recorder"
  root 'messages#index'
end
