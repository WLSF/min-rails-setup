class Stadium < ApplicationRecord
  
  #Validations
  validates :name, presence: true
end
