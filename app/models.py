from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class User(AbstractUser):
    pass

class Timestamp(models.Model):
    created = models.DateTimeField(auto_now_add=True)
