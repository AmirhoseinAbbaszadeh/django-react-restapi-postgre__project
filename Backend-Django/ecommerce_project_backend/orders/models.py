# orders/models.py

from django.db import models
from products.models import Product
from django.contrib.auth.models import User

class Order(models.Model):
    STATUS_CHOICES = [
        ('Pending', 'Pending'),
        ('Shipped', 'Shipped'),
        ('Completed', 'Completed'),
        ('Canceled', 'Canceled'),
    ]

    customer = models.ForeignKey(User, on_delete=models.CASCADE, related_name="orders", null=True)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='Pending')
    date_ordered = models.DateTimeField(auto_now_add=True)
    product_id = models.IntegerField(default=0)
    quantity = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"Order {self.id} by {self.customer.username}"

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='order_items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    total_price = models.DecimalField(max_digits=10, decimal_places=2)

    def save(self, *args, **kwargs):
        if not self.total_price:
            self.total_price = self.product.price * self.quantity
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.quantity} x {self.product.name} in Order {self.order.id}"
