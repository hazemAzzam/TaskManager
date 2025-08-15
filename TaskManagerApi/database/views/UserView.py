from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from django.db.models import Q

from database.models import UserModel
from database.serializers import UserSerializer, UserAutocompleteSerializer

class UserModelViewSet(viewsets.ModelViewSet):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer

    @action(detail=False, methods=["get"], url_path="autocomplete")
    def autocomplete(self, request):
        search = request.query_params.get("search", "")
        queryset = self.get_queryset().filter(
            Q(username__icontains=search) |
            Q(full_name__icontains=search) |
            Q(email__icontains=search)
        )
        serializer = UserAutocompleteSerializer(queryset, many=True)
        return Response(serializer.data)
