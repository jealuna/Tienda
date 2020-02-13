from django.db import models
from productos.models import producto
from almacenes.models import almacen

# Create your models here.
class ProductoOrden(models.Model):
    """Model definition for ProductoOrden."""
    modelo = models.ForeignKey(producto, on_delete=models.CASCADE)
    subinventario = models.ForeignKey(almacen, on_delete=models.CASCADE) 
    imei = models.CharField(max_length=15)
    

    class Meta:
        """Meta definition for ProductoOrden."""

        verbose_name = 'ProductoOrden'
        verbose_name_plural = 'ProductoOrdens'

    def __str__(self):
        """Unicode representation of ProductoOrden."""
        pass

