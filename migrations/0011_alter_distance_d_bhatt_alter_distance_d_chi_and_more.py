# Generated by Django 4.0 on 2021-12-23 13:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_rename_d_hell_distance_d_bhatt'),
    ]

    operations = [
        migrations.AlterField(
            model_name='distance',
            name='d_bhatt',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='distance',
            name='d_chi',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='distance',
            name='d_corr',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='distance',
            name='d_inter',
            field=models.FloatField(null=True),
        ),
    ]