class HomeController < ApplicationController
  def index
  end
  def home
    render layout: false
  end
  def mobile
    render layout: false
  end
end
