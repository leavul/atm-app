module Api
  module V1
    class BaseController < ApplicationController
      before_action :find_bank_account

      private
      def find_bank_account
        if params[:account_number].present?
          #TODO: catch error account_number non numerical number
          
          @bank_account = BankAccount
          .find_by_account_number(params[:account_number])
          
          if !@bank_account
            render json: {
              message: 'We could not find a bank account with that number, please try again.'
            }
          end
        else
          render json: {
            error: 'Account number is required'
          }
        end
      end
    end
  end
end