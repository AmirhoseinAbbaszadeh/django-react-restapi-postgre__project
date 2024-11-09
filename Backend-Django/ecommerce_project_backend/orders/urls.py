# orders/urls.py

from django.urls import path
from .views import OrderList
from django.urls import path
from .views import delete_order

urlpatterns = [
    path('', OrderList.as_view(), name='order-list'),
    path('<int:order_id>/', delete_order, name='delete_order'),
]
