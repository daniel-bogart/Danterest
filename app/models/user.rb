# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  first_name      :string
#  last_name       :string
#  age             :integer
#
class User < ApplicationRecord
    validates :username, :email, presence: true, uniqueness: true
    validates :password_digest, :age, presence: true
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}

    attr_reader :password 

    after_initialize :ensure_session_token

    has_one_attached :photo

    has_many :boards,
    foreign_key: :user_id,
    class_name: :Board

    has_many :pins,
    class_name: :Pin,
    foreign_key: :author_id


    def self.find_by_credentials(email, password)
        @user = User.find_by(email: email)
        if @user && @user.is_password?(password)
            return @user 
        else
            return nil
        end
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def is_password?(password)
        password_object = BCrypt::Password.new(self.password_digest)
        password_object.is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64(64)
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64(64)
    end
end
