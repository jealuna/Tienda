import json
from django.contrib.auth.models import User
from django.test import TestCase
from rest_framework.test import APITestCase, force_authenticate
from almacenes.models import almacen
from almacenes.serializers import AlmacenSerializer

class AlmacenTestCase(APITestCase):
    def setUp(self):
        self.username = 'john_doe'
        self.password = 'foobar'
        self.user = User.objects.create(username=self.username, password=self.password)
        self.client.force_authenticate(user=self.user)
        almacen.objects.create(
            subinventario='IDBCA00002', nombre='BCA-PLAZACENTELLAEDOMEX')
        almacen.objects.create(
            subinventario='IDBCA00003', nombre='BCA - TAXQUEÑA EDUCACION')

    def test_get_lista(self):
        response = self.client.get('/api/almacenes/', format='json')
        almacenes = almacen.objects.all()
        serializer = AlmacenSerializer(almacenes, many=True)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, 200)