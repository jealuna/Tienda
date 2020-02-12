from rest_framework import status
from rest_framework.response import Response
from rest_framework.exceptions import ParseError
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from rest_framework.views import APIView
from utils.utils import lee_archivo

class ArchivoOrdenView(APIView):
    parser_class = (FileUploadParser,)

    def put(self, request, format=None):
        if 'file' not in request.data:
            raise ParseError("Empty content")

        archivo = request.data['file']
        df = lee_archivo(archivo)
        print(df)

        return Response(status=status.HTTP_201_CREATED)