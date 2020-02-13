from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import serializers
from .serializers import ProductoSerializer
from .models import producto
# Create your views here.

class ProductoViewset(ModelViewSet):
    queryset = producto.objects.all()
    serializer_class = ProductoSerializer
    lookup_value_regex = '[^/]+'
    
    def get_serializer(self, *args, **kwargs):
        if "data" in kwargs:
            data = kwargs["data"]
            if isinstance(data, list):
                kwargs["many"] = True
        return super(ModelViewSet, self).get_serializer(*args, **kwargs)