from rest_framework import serializers
from app.models import Album, UserProfile, Track, User

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = User

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ["username", "password"]
        model = User

class TrackSerializer(serializers.ModelSerializer):

    class Meta:
        fields = ["title", "album"]
        model = Track

class AlbumSerializer(serializers.ModelSerializer):

    tracks = TrackSerializer(many=True)

    class Meta:
        fields = "__all__"
        read_only_fields = ("user",)
        model = Album

# this overrides the create on the serializer to get tracks off of track_data and iterate over
# the track_data to add multiple tracks from the Track model to the album model. By default it
# looks for only 1 item.
    def create(self, validated_data):
        track_data = validated_data.pop('tracks')
        album = super().create(validated_data=validated_data)
        for track in track_data:
            Track.objects.update_or_create(title=track.pop('title'), album=album)
        return album

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ["profile_picture"]
class UsersSerializer(serializers.ModelSerializer):
    profile = UserProfileSerializer()
    class Meta:
        fields = ["username","profile"]
        model = User
