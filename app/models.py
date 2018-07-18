from django.db import models
from django.contrib.auth.models import AbstractUser
# from app.views import ProxyView

# json_data = album_data
    # ArtistInfo.objects.create(user=request.user, artist_name=json_data.get("album").get("artist"))
    #
    # AlbumInfo.objects.create(user=request.user, album_name=json_data.get("album").get("name"),
    # image=json_data.get("album").get("image").get("size").get("medium"), url=json_data.get("album").get("url"), release=json_data.get("album").get("tags").get("tag").get("name", 0))

    # TrackInfo.objects.create(user=request.user, track_name=json_data.get("album").get("tracks").get("track").get("name"))

class User(AbstractUser):
    pass

class Timestamp(models.Model):
    created = models.DateTimeField(auto_now_add=True)

class ArtistInfo(models.Model):

    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    artist_name = models.CharField(max_length=255)
    # albums = models.CharField(max_length=255)

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
    release = models.IntegerField(null=True)

    def __str__(self):
        return self.track_name
