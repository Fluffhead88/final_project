"""final URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from app.views import IndexView, ArtistProxyView, AlbumProxyView, AlbumListCreateAPIView, AlbumRetrieveUpdateDestroyAPIView, UsersListCreateAPIView, UsersRetrieveUpdateDestroyAPIView, MyAlbumsListAPIView, MyAlbumsRetrieveUpdateDestroyAPIView, ContactAPIView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', IndexView.as_view(), name='index'),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),
    path('artist/proxy/', ArtistProxyView.as_view(), name='artist-proxy'),
    path('album/proxy/', AlbumProxyView.as_view(), name='album-proxy'),
    path('album/', AlbumListCreateAPIView.as_view(), name='album-list'),
    path('album/<int:pk>/', AlbumRetrieveUpdateDestroyAPIView.as_view(), name='album-detail'),
    path('myalbums/', MyAlbumsListAPIView.as_view(), name='myalbums-list'),
    path('myalbums/<int:pk>/', MyAlbumsRetrieveUpdateDestroyAPIView.as_view(), name='myalbums-detail'),
    path('contact/', ContactAPIView.as_view(), name='contact'),
    path('users/', UsersListCreateAPIView.as_view(), name='users-list'),
    path('users/<int:pk>/', UsersRetrieveUpdateDestroyAPIView.as_view(), name='user-detail'),
]
# re_path('^.*/$', IndexView.as_view(), name='index'),

if settings.DEBUG is True:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
