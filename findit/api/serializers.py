from django.db import models
from rest_framework.serializers import ModelSerializer
from rest_framework.utils import field_mapping
from .models import Distance, Image


class ImageSerializer(ModelSerializer):
    class Meta:
        model = Image
        fields = '__all__'


class DistanceSerializer(ModelSerializer):
    class Meta:
        model = Distance
        fields = '__all__'
