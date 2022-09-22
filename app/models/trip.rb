class Trip < ApplicationRecord
  belongs_to :user
  belongs_to :facility

  validates :comment, :review, :visited_at, presence: true
  validates :comment, length: {minimum: 3}
end
