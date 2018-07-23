from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    pass

class Album(models.Model):

    image = models.ImageField(upload_to='static/uploads', verbose_name='image', blank=True)
    artist = models.CharField(max_length=255) # make this a char field
    url = models.URLField(max_length=2000, blank=True)
    track_name = models.CharField(max_length=255, blank=True)
    release = models.IntegerField(blank=True)
    notes = models.CharField(max_length=2000, blank=True)

    def __str__(self):
        return self.album_name
