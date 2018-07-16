from rest_framework import serializers
from app.models import Timestamp, ArtistInfo, AlbumInfo, TrackInfo

class TimestampSerializer(serializers.ModelSerializer):

    class Meta:
        fields = "__all__"
        model = Timestamp

class ArtistInfoSerializer(serializers.ModelSerializer):

    class Meta:
        fields = "__all__"
        model = ArtistInfo

class AlbumInfoSerializer(serializers.ModelSerializer):

    class Meta:
        fields = "__all__"
        model = AlbumInfo

class TrackInfoSerializer(serializers.ModelSerializer):

    class Meta:
        fields = "__all__"
        model = TrackInfo
