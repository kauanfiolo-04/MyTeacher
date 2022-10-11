from rest_framework.views import APIView
from rest_framework.views import Response

class HomeApiView(APIView):
    def get(self, request, format=None):
        return Response({"name":"Batatinha","age":26},status=200)