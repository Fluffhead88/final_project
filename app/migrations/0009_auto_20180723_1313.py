# Generated by Django 2.0.7 on 2018-07-23 13:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0008_auto_20180723_0254'),
    ]

    operations = [
        migrations.RenameField(
            model_name='album',
            old_name='track_name',
            new_name='track',
        ),
        migrations.AddField(
            model_name='album',
            name='title',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
    ]
