from django.urls import path
from . import views

urlpatterns = [
    path('images/', views.getImages, name="images"),
    path('images/<str:id>/', views.getImage, name="image"),
    path('images/create', views.createImage, name="create-note"),

    path('distance/create', views.createDistance, name="create-distance"),
    path('distance/generate', views.getDistances, name="distances")
]