import json
from django.contrib.auth.models import User
from django.test import TestCase
from rest_framework.test import APITestCase, force_authenticate
from productos.models import producto
from productos.serializers import ProductoSerializer

class AlmacenTestCase(APITestCase):
    def setUp(self):
        self.username = 'john_doe'
        self.password = 'foobar'
        self.user = User.objects.create(username=self.username, password=self.password)
        self.client.force_authenticate(user=self.user)
        producto.objects.create(
            SKU='N.ISE32RS', descripcion='Celular')
        producto.objects.create(
            SKU='N.J7NEOD', descripcion='Celular')

    def test_get_lista(self):
        response = self.client.get('/api/productos/', format='json')
        productos = producto.objects.all()
        serializer = ProductoSerializer(productos, many=True)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, 200)