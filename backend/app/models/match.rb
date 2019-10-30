class Match < ApplicationRecord
  
  #Validations
  validates :title, presence: true
end
