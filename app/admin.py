from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from app.models import User, Artist, Album

admin.site.register(User, UserAdmin)
admin.site.register(Album)
admin.site.register(Artist)
