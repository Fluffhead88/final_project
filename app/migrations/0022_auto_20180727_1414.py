# Generated by Django 2.0.7 on 2018-07-27 14:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0021_auto_20180727_1405'),
    ]

    operations = [
        migrations.AlterField(
            model_name='users',
            name='image',
            field=models.ImageField(upload_to='media/'),
        ),
    ]