class Api::UsersController < ApplicationController 
    
    def index 
        @users = User.all 
        if !@users
            render json: ["There are no users"]
        else 
            render :index 
        end 
    end 

    def show 
        @user = User.find(params[:id])
        if !@user 
            render json: @user.errors.full_messages 
        else
            render :show
        end  
    end 
    
    def create 
        @user = User.new(user_params)
        if @user 
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 404            
        end 
    end 

    def user_params 
        params.require(:user).permit(:username, :email, :password)
    end 
end 