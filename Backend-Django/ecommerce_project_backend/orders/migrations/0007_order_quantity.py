# Generated by Django 5.1.1 on 2024-11-04 14:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0006_order_product_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='quantity',
            field=models.PositiveIntegerField(default=0),
        ),
    ]
