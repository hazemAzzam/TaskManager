from rest_framework import viewsets
from database.models import TaskModel
from database.serializers import TaskModelSerializer

class TaskModelViewSet(viewsets.ModelViewSet):
    queryset = TaskModel.objects.all()
    serializer_class = TaskModelSerializer
