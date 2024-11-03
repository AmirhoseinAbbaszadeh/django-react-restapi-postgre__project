from django.shortcuts import render

# Create your views here.
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework import generics
from .serializers import UserSerializer

class RegisterUser(generics.CreateAPIView):
    serializer_class = UserSerializer
