from rest_framework import status
from rest_framework.response import Response
from rest_framework.exceptions import ParseError
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from rest_framework.views import APIView
from utils.utils import lee_archivo
from ordenescompra.models import Orden

def procesa(self, df):
    ordenes_compra = []
    for index, row in df.iterrows():
        print(row[0])
        print(row[1])
        # orden = Orden(subinventario=row[0], status='LISTO')
        # ordenes_compra.append(orden)
        for i in range(len(row)):
            if i > 2:
                pass
                # print(str(row.index[i]) + '-' + str(int(row[i])))
    print(ordenes_compra)

class ArchivoOrdenView(APIView):
    parser_class = (FileUploadParser,)

    def put(self, request, format=None):
        if 'file' not in request.data:
            raise ParseError("Empty content")

        archivo = request.data['file']
        df = lee_archivo(archivo)
        procesa(self, df)

        return Response(status=status.HTTP_201_CREATED)