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
from django.db.models import Q

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

class ContactAPIView(APIView):
    def post(self, request):

        print('here', request.data)
        album = Album.objects.get(id=request.data.get('album_id'))

        url = 'https://api.mailgun.net/v3/{}/messages'.format('sandboxf79e0e448555466a9dda56a66598d71f.mailgun.org')
        auth = ('api', settings.MAILGUN_API_KEY)
        data = {
            'from': 'Mailgun User <mailgun@{}>'.format('sandboxf79e0e448555466a9dda56a66598d71f.mailgun.org'),
            'to': album.user.email,
            # set reply to requesting user
            'subject': album.album,
            'text': 'Plaintext content',
            # look up reply to on mailgun
        }
        print(self.request.user.email)
        response = requests.post(url, auth=auth, data=data)
        response.raise_for_status()

        return Response(['It works!'])

class AlbumListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = AlbumSerializer
    filter_backends=(filters.SearchFilter,)
    search_fields=('album', 'user',)

    def get_queryset(self):

        #return Album.objects.filter(user=self.request.user)
        return Album.objects.prefetch_related("tracks").all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class AlbumRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = AlbumSerializer

    def get_queryset(self):
        return Album.objects.filter(user=self.request.user)

class MyAlbumsListAPIView(generics.ListAPIView):
    serializer_class = AlbumSerializer

    def get_queryset(self):
        return Album.objects.filter(Q(user=self.request.user))

class MyAlbumsRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = AlbumSerializer

    def get_queryset(self):
        return Album.objects.filter(Q(user=self.request.user))

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

        
