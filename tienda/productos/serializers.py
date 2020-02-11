from rest_framework.serializers import ModelSerializer
from .models import producto

class ProductoSerializer(ModelSerializer):
    class Meta:
        model = producto
        fields = '__all__'