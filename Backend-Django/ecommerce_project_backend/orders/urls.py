# orders/urls.py

from django.urls import path
from .views import OrderList

urlpatterns = [
    path('', OrderList.as_view(), name='order-list'),
]
