from rest_framework import serializers
from database.models import TaskModel

class TaskModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskModel
        fields = '__all__'
