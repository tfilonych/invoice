class Product < ActiveRecord::Base


  def self.getAllProducts()
    return Product.select(['id','productName','units','quantity','price']).to_json
  end

end