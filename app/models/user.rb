class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :trackable, :validatable, :omniauthable

  # as buyer
  has_many :orders, foreign_key: :buyer_id
  has_many :purchases, class_name: 'Transaction', foreign_key: :buyer_id
  belongs_to :current_order, class_name: 'Order', optional: true

  # as artist
  has_many :artworks, foreign_key: :artist_id
  has_many :sales, through: :artworks, source: :transactions
  has_many :buyers, through: :sales


  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
    end
  end

end
