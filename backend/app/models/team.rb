class Team < ApplicationRecord
  
  #Validations
  validates :name, presence: true
end
