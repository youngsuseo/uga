from django.shortcuts import render
from rest_framework.views import APIView


# make answer of the question to possible to eat
class Sub(APIView):
    def get(self, request):
        return render(request, 'uga/chat.html');


