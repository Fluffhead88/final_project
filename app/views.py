from django.shortcuts import render
from django.views.generic import TemplateView

from rest_framework import generics
from app.models import Timestamp, ArtistInfo, AlbumInfo, TrackInfo
from app.serializers import TimestampSerializer, ArtistInfoSerializer, AlbumInfoSerializer, TrackInfoSerializer
import requests
from app.permissions import IsOwnerOrReadOnly

# Create your views here.
class IndexView(TemplateView):
    template_name="index.html"

class TimestampListCreateAPIView(generics.ListCreateAPIView):
    queryset = Timestamp.objects.all()
    serializer_class = TimestampSerializer

class ArtistInfoListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = ArtistInfoSerializer

    def get_queryset(self):
        return ArtistInfo.objects.all()

        return ArtistInfo.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ArtistInfoRetrieveDestroyAPIView(generics.RetrieveDestroyAPIView):
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = ArtistInfoSerializer

    def get_queryset(self):
        return ArtistInfo.objects.filter(user=self.request.user)

class AlbumInfoListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = AlbumInfoSerializer

    def get_queryset(self):
        return AlbumInfo.objects.all()

        return AlbumInfo.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class AlbumInfoRetrieveDestroyAPIView(generics.RetrieveDestroyAPIView):
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = AlbumInfoSerializer

    def get_queryset(self):
        return AlbumInfo.objects.filter(user=self.request.user)

class TrackInfoListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = TrackInfoSerializer

    def get_queryset(self):
        return TrackInfo.objects.all()

        return TrackInfo.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class TrackInfoRetrieveDestroyAPIView(generics.RetrieveDestroyAPIView):
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = TrackInfoSerializer

    def get_queryset(self):
        return TrackInfo.objects.filter(user=self.request.user)

#   r = requests.get('http://ws.audioscrobbler.com//2.0/?method=artist.getinfo&artist=Cher&api_key=f59e13683b931d07aa429d08f9d7b640&format=json')
#     print(r)
#
# def home(request):
#     response = requests.get('http://ws.audioscrobbler.com//2.0/?method=artist.getinfo&artist=Cher&api_key=YOUR_API_KEY&format=json')
#     banddata = response.json()
#     return render(request, 'core/home.html', {
#         'artist': banddata['artist'],
#         print('artist')
#     })
# import requests
#
# def lastfm_artist_search(request, artist_name):
#     api_url = 'http://ws.audioscrobbler.com/2.0/'
#     api_key = 'YOUR_LASTFM_API_KEY'
#     url = api_url+'?method=artist.search&format=json&artist='+artist_name+'&api_key='+api_key
#     data = requests.get(url)
#     return HttpResponse(data.text)
