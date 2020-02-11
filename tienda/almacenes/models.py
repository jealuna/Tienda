from django.db import models

# Create your models here.
class almacen(models.Model):
    """Model definition for almacen."""
    subinventario = models.CharField(primary_key=True, unique=True, max_length=10)
    nombre = models.CharField(max_length=300)

    class Meta:
        """Meta definition for almacen."""

        verbose_name = 'almacen'
        verbose_name_plural = 'almacenes'

    def __str__(self):
        """Unicode representation of almacen."""
        return f'{self.subinventario}-{self.nombre}'

