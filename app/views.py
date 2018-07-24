from django.shortcuts import render
from django.views.generic import TemplateView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets, generics
from app.models import Album, Users
from app.serializers import AlbumSerializer, UsersSerializer
import requests
from app.permissions import IsOwnerOrReadOnly
from django.conf import settings
from rest_framework import filters

class IndexView(TemplateView):
    template_name="index.html"

class ArtistProxyView(APIView):
    def get(self, request):

        api_url = "http://ws.audioscrobbler.com/2.0/"
        artist = request.GET.get('artist')
        artist_data = requests.get(f'{api_url}?method=artist.gettopalbums&artist={artist}&api_key={settings.LASTFM_API_KEY}&format=json').json()
        return Response(artist_data)

class AlbumProxyView(APIView):
    def get(self, request):

        api_url = "http://ws.audioscrobbler.com/2.0/"
        artist = request.GET.get('artist')
        album = request.GET.get('album')
        album_data = requests.get(f'{api_url}?method=album.getinfo&api_key={settings.LASTFM_API_KEY}&artist={artist}&album={album}&format=json').json()
        return Response(album_data)

class AlbumListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = AlbumSerializer
    filter_backends=(filters.SearchFilter,)
    search_fields=('album', 'artist',)

    def get_queryset(self):

        return Album.objects.prefetch_related("tracks").all()
        #return Album.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class AlbumRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = AlbumSerializer

    def get_queryset(self):
        return Album.objects.filter(user=self.request.user)

class UsersListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = UsersSerializer
    filter_backends=(filters.SearchFilter,)
    search_fields=('user',)

    def get_queryset(self):

        return Users.objects.all()
        #return Users.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class UsersRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = UsersSerializer

    def get_queryset(self):
        return Users.objects.filter(user=self.request.user)
