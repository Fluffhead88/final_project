from django.test import TestCase, RequestFactory, Client
import json
from app.models import Album, User
from django.urls import reverse
from rest_framework.test import APIClient
from model_mommy import mommy
from rest_framework.authtoken.models import Token


class AlbumViewSetTest(TestCase):
    def setUp(self):
        self.album = mommy.make(Album)
        self.user = mommy.make(User)

    def test_album_list(self):
        # Make sure the rest framework router is configured
        url = reverse('album-list')
        self.assertEqual(url, '/album/')

        # Functional test: get list of albums
        c = Client()
        response = c.get(reverse('album-list'), content_type='application/json')
        self.assertEquals(200, response.status_code)

    def test_album_detail(self):
        # Make sure the rest framework router is configured
        url = reverse('album-detail', kwargs={'pk': self.album.pk})
        self.assertEqual(url, '/album/{}/'.format(self.album.pk))

        # Functional test: get detail of album
        c = Client()
        response = c.get(reverse('album-detail', kwargs={'pk': self.album.pk}), content_type='application/json')
        self.assertEquals(200, response.status_code)



    def test_album_create(self):
        # Functional test: get detail of album
        c = APIClient()
        album_data = {
            'user_id' : self.user.pk,
            'artist': 'Phish',
            'album': 'Rift',

        }

        # Post request should create record and return status 201
        response = c.post(reverse('album-list'), album_data, format='json')
        self.assertEquals(201, response.status_code)

        # Convert json response to dict and remove the id since we don't know what its value is
        response_data = json.loads(response.content)
        response_data.pop('id')

        # Make sure the album was created with the values we provided
        self.assertEquals(response_data, album_data)

class AlbumModelTest(TestCase):
    def setUp(self):
        self.user = mommy.make(User)
        self.album = Album.objects.create(artist='Phish', album='Rift', notes='awesome', user=self.user)

    def test_get_notes(self):
        rift = Album.objects.get(album='Rift')
        rift_notes = rift.notes

        self.assertEquals(rift_notes, 'awesome')

    # def test_default_description(self):
    #     self.assertEquals(self.album.notes, 'snowy wonderland')

        # no_des_album = album.objects.create(name='Hoth', active=True)
        # self.assertEquals(no_des_album.description, 'Not explored yet')
