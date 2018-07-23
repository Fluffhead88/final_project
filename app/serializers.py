from rest_framework import serializers
from app.models import Album


class AlbumSerializer(serializers.ModelSerializer):

    class Meta:
        fields = "__all__"
        read_only_fields = ("user",)
        model = Album
