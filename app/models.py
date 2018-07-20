from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    pass

class Timestamp(models.Model):
    created = models.DateTimeField(auto_now_add=True)

class Artist(models.Model):

    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    artist_name = models.CharField(max_length=255)
    albums = models.CharField(max_length=255)

    def __str__(self):
        return self.artist_name

class Album(models.Model):

    image = models.ImageField(upload_to='static/uploads', verbose_name='image')
    album_name = models.ForeignKey(Artist, on_delete=models.CASCADE, default=0)
    url = models.URLField(max_length=2000)
    track_name = models.CharField(max_length=255)
    release = models.IntegerField(null=True)


    def __str__(self):
        return self.album_name
