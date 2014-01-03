class User
	include Mongoid::Document
	before_save :generate_token

	field :name, type: String
	field :password, type: String
	field :email, type: String
	field :gender, type: String
	field :birthdate, type: Date
	field :token, type: String
	embeds_many :answers
	

	def generate_token
		self.token = SecureRandom.base64
	end
end