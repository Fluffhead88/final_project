# Generated by Django 2.0.7 on 2018-07-27 14:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0022_auto_20180727_1414'),
    ]

    operations = [
        migrations.AlterField(
            model_name='users',
            name='image',
            field=models.FileField(upload_to='media/'),
        ),
    ]
