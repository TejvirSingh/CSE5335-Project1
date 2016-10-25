class DemoController < ApplicationController

  layout 'application'
  
  def index
  	
  end

  def hello
  	render('index')
  end

  def other_hello
  	redirect_to(:controller => 'demo' , :action => 'index')
  end

end
