from rest_framework.serializers import ModelSerializer
from .models import almacen

class AlmacenSerializer(ModelSerializer):
    class Meta:
        model = almacen
        fields = '__all__'

