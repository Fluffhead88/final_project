from rest_framework import serializers
from app.models import Timestamp

class TimestampSerializer(serializers.ModelSerializer):

    class Meta:
        fields = "__all__"
        model = Timestamp
