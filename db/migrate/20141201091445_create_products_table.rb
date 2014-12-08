class CreateProductsTable < ActiveRecord::Migration
  def change
    create_table :products do |table|
      table.string "productName", :limit => 30, :null => false
      table.string "units", :null => false
      table.integer "quantity", :null => false
      table.integer "price", :null => false
      table.timestamps
  end
 end
end