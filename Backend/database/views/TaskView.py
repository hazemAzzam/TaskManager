from rest_framework import viewsets
from database.models import TaskModel
from database.serializers import TaskModelSerializer
from rest_framework.pagination import PageNumberPagination

class TaskModelViewSet(viewsets.ModelViewSet):
    queryset = TaskModel.objects.all()
    serializer_class = TaskModelSerializer
