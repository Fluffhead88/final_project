from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from app.models import User, Album, Users

admin.site.register(User, UserAdmin)
admin.site.register(Album)
admin.site.register(Users)
