from django.urls import path
from .views import RegisterUser, UserId
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('register/', RegisterUser.as_view(), name='register'),
    path('login/', TokenObtainPairView.as_view(), name='login'),
    path('', TokenObtainPairView.as_view(), name='login'),
    path('id/', UserId.as_view(), name='id'),
    path('home/', TokenObtainPairView.as_view(), name='home'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
