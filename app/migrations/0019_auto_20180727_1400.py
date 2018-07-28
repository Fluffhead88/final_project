# Generated by Django 2.0.7 on 2018-07-27 14:00

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0018_remove_album_release'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='users',
            name='album',
        ),
        migrations.RemoveField(
            model_name='users',
            name='image',
        ),
        migrations.AddField(
            model_name='users',
            name='bio',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AddField(
            model_name='users',
            name='profile_picture',
            field=models.FileField(blank=True, null=True, upload_to='media/'),
        ),
        migrations.AlterField(
            model_name='users',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='profile', to=settings.AUTH_USER_MODEL),
        ),
    ]