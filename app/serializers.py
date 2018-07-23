from rest_framework import serializers
from app.models import Album, Users


class AlbumSerializer(serializers.ModelSerializer):

    class Meta:
        fields = "__all__"
        read_only_fields = ("user",)
        model = Album

class UsersSerializer(serializers.ModelSerializer):

    class Meta:
        fields = "__all__"
        read_only_fields = ("user",)
        model = Users
