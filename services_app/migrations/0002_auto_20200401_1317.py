# Generated by Django 2.2.1 on 2020-04-01 13:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('services_app', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='ServiceRerquest',
            new_name='ServiceRequest',
        ),
    ]