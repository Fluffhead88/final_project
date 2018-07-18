from rest_framework import serializers
from app.models import Timestamp, Artist, Album

class TimestampSerializer(serializers.ModelSerializer):

    class Meta:
        fields = "__all__"
        model = Timestamp

class ArtistSerializer(serializers.ModelSerializer):

    class Meta:
        fields = "__all__"
        model = Artist

class AlbumSerializer(serializers.ModelSerializer):

    class Meta:
        fields = "__all__"
        model = Album
