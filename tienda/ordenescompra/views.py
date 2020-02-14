from numbers import Number
from rest_framework import status
from rest_framework.response import Response
from rest_framework.exceptions import ParseError
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from rest_framework.views import APIView
from utils.utils import lee_archivo
from ordenescompra.models import Orden, OrdenProducto
from almacenes.models import almacen
from productos.models import producto

def procesa(self, df):
    for index, row in df.iterrows():
        if row[0] == 0:
            break
        subinventario, created = almacen.objects.get_or_create(pk=row[0], nombre=row[1].strip())
        orden = Orden(subinventario=subinventario, status='LISTO')
        orden.save()
        # ordenes_compra.append(orden)
        for i in range(len(row)):
            if i > 2 and isinstance(row[i], Number) and int(row[i]) != 0:
                prod, created = producto.objects.get_or_create(pk=str(row.index[i]), descripcion='Celular')
                ordenProd = OrdenProducto(producto=prod, orden=orden, cantidad=int(row[i]))
                ordenProd.save()

class ArchivoOrdenView(APIView):
    parser_class = (FileUploadParser,)

    def put(self, request, format=None):
        if 'file' not in request.data:
            raise ParseError("Empty content")

        archivo = request.data['file']
        df = lee_archivo(archivo)
        procesa(self, df)

        return Response(status=status.HTTP_201_CREATED)