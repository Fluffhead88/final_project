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
from rest_framework import filters

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
    filter_backends=(filters.SearchFilter)
    search_fields=('artist')

    def get_queryset(self):
        return Artist.objects.all()

        return Artist.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ArtistRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = ArtistSerializer

    def get_queryset(self):
        return Artist.objects.filter(user=self.request.user)

class AlbumListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = AlbumSerializer
    filter_backends=(filters.SearchFilter)
    search_fields=('album')

    def get_queryset(self):
        return Album.objects.all()

        return Album.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class AlbumRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = AlbumSerializer

    def get_queryset(self):
        return Album.objects.filter(user=self.request.user)
