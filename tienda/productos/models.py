from django.db import models

# Create your models here.
class producto(models.Model):
    """Model definition for producto."""
    SKU = models.CharField(primary_key=True, max_length=300)

    class Meta:
        """Meta definition for producto."""

        verbose_name = 'producto'
        verbose_name_plural = 'productos'

    def __str__(self):
        """Unicode representation of producto."""
        return f'{self.SKU}'
