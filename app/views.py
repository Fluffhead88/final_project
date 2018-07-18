from django.shortcuts import render
from django.views.generic import TemplateView
from rest_framework.views import APIView
from rest_framework.response import Response

from rest_framework import generics
from app.models import Timestamp, Artist, Album
from app.serializers import TimestampSerializer, ArtistSerializer, AlbumSerializer
import requests
from app.permissions import IsOwnerOrReadOnly
from django.conf import settings

class IndexView(TemplateView):
    template_name="index.html"

class ArtistProxyView(APIView):
    def get(self, request):

        api_url = "http://ws.audioscrobbler.com/2.0/"
        artist = "Phish"
        artist_data = requests.get(f'{api_url}?method=artist.gettopalbums&artist={artist}&api_key={settings.LASTFM_API_KEY}&format=json').json()
        return Response(artist_data)

class AlbumProxyView(APIView):
    def get(self, request):

        api_url = "http://ws.audioscrobbler.com/2.0/"
        artist = "Phish"
        album = "Rift"
        album_data = requests.get(f'{api_url}?method=album.getinfo&api_key={settings.LASTFM_API_KEY}&artist={artist}&album={album}&format=json').json()
        return Response(album_data)


class TimestampListCreateAPIView(generics.ListCreateAPIView):
    queryset = Timestamp.objects.all()
    serializer_class = TimestampSerializer

class ArtistListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = ArtistSerializer

    def get_queryset(self):
        return ArtistInfo.objects.all()

        return ArtistInfo.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ArtistRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = ArtistSerializer

    def get_queryset(self):
        return ArtistInfo.objects.filter(user=self.request.user)

class AlbumListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = AlbumSerializer

    def get_queryset(self):
        return AlbumInfo.objects.all()

        return AlbumInfo.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class AlbumRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = AlbumSerializer

    def get_queryset(self):
        return AlbumInfo.objects.filter(user=self.request.user)
