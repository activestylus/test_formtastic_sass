class Post < ActiveRecord::Base
  attr_accessible :title, :body, :category, :live, :updated_at
  validates_presence_of :title, :body
end
