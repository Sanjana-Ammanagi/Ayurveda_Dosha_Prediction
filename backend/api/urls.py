from django.urls import path
from .views import predict_doshas

urlpatterns = [
    path('predict',predict_doshas ),
]