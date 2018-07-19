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

from app.views import IndexView, ArtistProxyView, AlbumProxyView, TimestampListCreateAPIView, ArtistListCreateAPIView, ArtistRetrieveUpdateDestroyAPIView, AlbumListCreateAPIView, AlbumRetrieveUpdateDestroyAPIView
# router?
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', IndexView.as_view(template_name='index.html'), name='index'),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),
    path('artist/proxy/', ArtistProxyView.as_view(), name='artist_proxy'),
    path('album/proxy/', AlbumProxyView.as_view()),
    path('artist/', ArtistListCreateAPIView.as_view()),
    path('artist/<int:pk>', ArtistRetrieveUpdateDestroyAPIView.as_view()),
    path('album/', AlbumListCreateAPIView.as_view()),
    path('album/<int:pk>', AlbumRetrieveUpdateDestroyAPIView.as_view()),
    path('timestamps/', TimestampListCreateAPIView.as_view()),
]
