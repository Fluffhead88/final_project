from django.db import models
from django.contrib.auth.models import AbstractUser

# creates unique users
class User(AbstractUser):
    pass

# main model that stores all the album information for a user
class Album(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    artist = models.CharField(max_length=255)
    album = models.CharField(max_length=255)
    url = models.URLField(max_length=2000, blank=True)
    notes = models.CharField(max_length=2000, blank=True)
    image = models.URLField(max_length=255, blank=True)

    def __str__(self):
        return self.album

# seperated out track model because of last.fm's nesting structure - allows multiple tracks to be
# tied to an album
class Track(models.Model):
    album = models.ForeignKey(Album, related_name="tracks", on_delete=models.CASCADE, blank=True)
    title = models.CharField(max_length=255)

# user model to search users on front end to show their collections
class Users(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    album = models.ForeignKey(Album, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='static/uploads', verbose_name='image', null=True)
