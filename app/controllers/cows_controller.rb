class CowsController < ApplicationController
  
  def index
    @cows = Cow.all
    @cow = Cow.new
  end

  def show
    @cow = Cow.find(params[:id])
  end

  def create
    @cow = Cow.new(cow_params)
    if request.xhr?
      # This was from an ajax form
      if @cow.save
        render partial: 'cow', locals:{cow: @cow}
      else
        render text: 'failed', status: 500
      end
    else
      raise 'Only expecting create over ajax'
    end
  end

  def age
    @cow = Cow.find(params[:id])
    @cow.age = 1 + @cow.age
    @cow.save
    render json: @cow
  end

  def destroy
    @cow = Cow.find(params[:id])
    @cow.destroy
    render json: {deleted: params[:id]}
  end

  private

    # Never trust parameters from the scary internet, only allow the white list through.
    def cow_params
      params.require(:cow).permit(:name, :age, :breed)
    end
end
