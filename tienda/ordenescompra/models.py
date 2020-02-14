from django.db import models
from productos.models import producto
from almacenes.models import almacen

# Create your models here.
class ProductoOrden(models.Model):
    """Model definition for ProductoOrden."""
    modelo = models.ForeignKey(producto, on_delete=models.CASCADE)
    subinventario = models.ForeignKey(almacen, on_delete=models.CASCADE)
    imei = models.CharField(max_length=15)
    folio = models.IntegerField(default=10000000001)
    
    class Meta:
        """Meta definition for ProductoOrden."""

        verbose_name = 'ProductoOrden'
        verbose_name_plural = 'ProductoOrdens'

    def __str__(self):
        """Unicode representation of ProductoOrden."""
        return f'{self.modelo}-{self.imei}'

class Orden(models.Model):
    """Model definition for Orden."""
    status_choices = ('LISTO', 'CANCELADO', 'PENDIENTE')
    subinventario = models.ForeignKey(almacen, on_delete=models.CASCADE)
    status = models.CharField(max_length=50, default='LISTO')

    class Meta:
        """Meta definition for Orden."""

        verbose_name = 'Orden'
        verbose_name_plural = 'Ordens'

    def __str__(self):
        """Unicode representation of Orden."""
        return f'Orden-{self.subinventario}'

class OrdenProducto(models.Model):
    """Model definition for OrdenProducto."""
    producto = models.ForeignKey(producto, on_delete=models.CASCADE)
    orden = models.ForeignKey(Orden, on_delete=models.CASCADE)
    cantidad = models.IntegerField()
    class Meta:
        """Meta definition for OrdenProducto."""

        verbose_name = 'OrdenProducto'
        verbose_name_plural = 'OrdenProductos'

    def __str__(self):
        """Unicode representation of OrdenProducto."""
        return f'{self.producto}-{self.cantidad}'
