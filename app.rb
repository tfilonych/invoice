require 'sinatra'
require 'sinatra/activerecord'
require 'json'

set :database, 'sqlite3:./db/invoice.db'
Dir['./models/*.rb'].each {|file| require file}

get '/' do
  send_file 'public/index.html'
end

post '/products' do
  data = JSON.parse request.body.read
  product = Product.new(data)
  if product.save
    return [200, product.attributes.to_json]
  else
    return [400, bad]
  end
end

get '/products' do
  Product.getAllProducts()
end

delete '/product/:id' do
  product = Product.find(params['id'])
  if product
    product.destroy
    return [200, 'product has been deleted']
  else
    return [400, 'bad']
  end
end

put '/product/:id' do
  data = JSON.parse request.body.read
  filter = %w(id productName units quantity price)
  product = Product.find(params['id'])
  data.each{|key, value| product.send("#{key}=", value)}
  if product.save
    return [200, product.attributes.to_json]
  else
    return [400, 'bad']
  end
end

not_found do
  send_file 'public/index.html'
end
