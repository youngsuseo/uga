from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.templatetags.rest_framework import data
from rest_framework.views import APIView


# make answer of the question to possible to eat
class Sub(APIView):
    def get(self, request):
        return JsonResponse({"answer": "yes"})

    def post(self, request):
        return Response({"answer": "yes"})


