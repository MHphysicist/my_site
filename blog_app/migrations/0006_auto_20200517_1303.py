# Generated by Django 2.2.1 on 2020-05-17 13:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog_app', '0005_auto_20200517_1248'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='subject_types',
            new_name='subject_type',
        ),
    ]