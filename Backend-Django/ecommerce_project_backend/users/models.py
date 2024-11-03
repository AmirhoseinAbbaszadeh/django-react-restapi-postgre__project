from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser
from django.db import models

from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='custom_user_set',  # Avoids conflict with default User model
        blank=True,
        help_text="The groups this user belongs to.",
        verbose_name="groups"
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='custom_user_permissions_set',  # Avoids conflict with default User model
        blank=True,
        help_text="Specific permissions for this user.",
        verbose_name="user permissions"
    )
