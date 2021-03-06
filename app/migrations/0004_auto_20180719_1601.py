# Generated by Django 2.0.7 on 2018-07-19 16:01

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_auto_20180716_1909'),
    ]

    operations = [
        migrations.CreateModel(
            name='Album',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='static/uploads', verbose_name='image')),
                ('url', models.URLField(max_length=2000)),
                ('track_name', models.CharField(max_length=255)),
                ('release', models.IntegerField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Artist',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('artist_name', models.CharField(max_length=255)),
                ('albums', models.CharField(max_length=255)),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.RemoveField(
            model_name='albuminfo',
            name='album_name',
        ),
        migrations.RemoveField(
            model_name='artistinfo',
            name='user',
        ),
        migrations.RemoveField(
            model_name='trackinfo',
            name='track_name',
        ),
        migrations.DeleteModel(
            name='AlbumInfo',
        ),
        migrations.DeleteModel(
            name='ArtistInfo',
        ),
        migrations.DeleteModel(
            name='TrackInfo',
        ),
        migrations.AddField(
            model_name='album',
            name='album_name',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='app.Artist'),
        ),
    ]
