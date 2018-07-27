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
    # profile = models.ImageField(upload_to='media/', verbose_name='image', null=True, blank=True)

    def __str__(self):
        return self.album

# seperated out track model because of last.fm's nesting structure - allows multiple tracks to be
# tied to an album
class Track(models.Model):
    album = models.ForeignKey(Album, related_name="tracks", on_delete=models.CASCADE, blank=True)
    title = models.CharField(max_length=255)

# user model to search users on front end to show their collections
class UserProfile(models.Model):
    user = models.ForeignKey(User, related_name='profile', on_delete=models.CASCADE,)
    bio = models.CharField(max_length=250, blank=True, null=True)
    profile_picture = models.ImageField(upload_to='media/', blank=True)
