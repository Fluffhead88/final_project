from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class User(AbstractUser):
    pass

class Timestamp(models.Model):
    created = models.DateTimeField(auto_now_add=True)

class ArtistInfo(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=0)
    artist_name = models.CharField(max_length=255)
    albums = models.CharField(max_length=255)

    def __str__(self):
        return self.artist_name

class AlbumInfo(models.Model):
    image = models.ImageField(upload_to='static/uploads', verbose_name='image')
    album_name = models.ForeignKey(ArtistInfo, on_delete=models.CASCADE, default=0)
    url = models.URLField(max_length=2000)

    def __str__(self):
        return self.album_name

class TrackInfo(models.Model):
    track_name = models.ForeignKey(AlbumInfo, on_delete=models.CASCADE, default=0)

    def __str__(self):
        return self.track_name
