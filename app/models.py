from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    pass

class Album(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    artist = models.CharField(max_length=255)
    album = models.CharField(max_length=255)
    url = models.URLField(max_length=2000, blank=True)
    track = models.CharField(max_length=255, blank=True)
    release = models.IntegerField(blank=True, null=True)
    notes = models.CharField(max_length=2000, blank=True)

    def __str__(self):
        return self.album_name

class Users(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    album = models.ForeignKey(Album, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='static/uploads', verbose_name='image', null=True)
