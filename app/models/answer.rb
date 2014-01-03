class Answer
	include Mongoid::Document

	field :question, type: Integer
	field :rating, type: Integer
end