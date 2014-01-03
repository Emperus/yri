class UsersController < ApplicationController
	def index
		@user= User.new
	end
	def create
		@user = params[:user]
		if(@user.save)
			redirect_to root_path
		end
	end
	def login
		user = User.find_by email: params[:user][:email]
		if user
			cookies[:email] = user.email
			cookies[:token] = user.token
		end
		redirect_to root_path
	end
	def delete

	end
end