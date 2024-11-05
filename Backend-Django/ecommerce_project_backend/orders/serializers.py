# orders/serializers.py

from rest_framework import serializers
from .models import Order, OrderItem

class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ['id', 'product', 'quantity', 'total_price']

class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True, source='order_items')

    class Meta:
        model = Order
        fields = ['id', 'customer_id', 'status', 'date_ordered','product_id','quantity', 'items']  # Ensure 'items' is included
