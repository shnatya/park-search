class User < ApplicationRecord
  has_secure_password

  has_many :trips
  has_many :facilities, through: :trips

  validates :username, presence: :true, uniqueness: { case_sensitive: false}, length: {minimum: 3}
end
