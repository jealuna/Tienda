from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import serializers
from .serializers import AlmacenSerializer
from .models import almacen
# Create your views here.

class AlmacenViewset(ModelViewSet):
    queryset = almacen.objects.all()
    serializer_class = AlmacenSerializer
    
    def get_serializer(self, *args, **kwargs):
        if "data" in kwargs:
            data = kwargs["data"]
            if isinstance(data, list):
                kwargs["many"] = True
        return super(ModelViewSet, self).get_serializer(*args, **kwargs)