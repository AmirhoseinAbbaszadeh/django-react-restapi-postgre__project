# Generated by Django 5.1.1 on 2024-11-04 13:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0003_order_count'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='Product_name',
            field=models.CharField(default='no name', max_length=30),
        ),
    ]