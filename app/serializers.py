from rest_framework import serializers
from app.models import Album, Users, Track

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


    def create(self, validated_data):
        track_data = validated_data.pop('tracks')
        album = super().create(validated_data=validated_data)
        for track in track_data:
            Track.objects.update_or_create(title=track.pop('title'), album=album)
        return album


class UsersSerializer(serializers.ModelSerializer):

    class Meta:
        fields = "__all__"
        read_only_fields = ("user",)
        model = Users
