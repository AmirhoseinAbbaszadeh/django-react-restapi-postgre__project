from django.shortcuts import render
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework import generics
from .serializers import UserSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView  # Import APIView

class RegisterUser(generics.CreateAPIView):
    serializer_class = UserSerializer

class UserId(APIView):  # Inherit from APIView
    # user = request.user
    # serializer = UserSerializer(user)
    # return Response(serializer.data)
    permission_classes = [IsAuthenticated]  # Apply permissions

    def get(self, request):  # Define the GET method
        user_id = request.user.id
        return Response({'user_id': user_id})  # Return the user ID
