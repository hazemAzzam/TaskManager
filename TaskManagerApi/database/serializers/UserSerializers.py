from rest_framework import serializers
from database.models import UserModel

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ['id', 'username', 'email', 'full_name', 'role']

class UserAutocompleteSerializer(serializers.ModelSerializer):
    label = serializers.CharField(source='full_name')
    value = serializers.IntegerField(source='id')

    class Meta:
        model = UserModel
        fields = ['label', 'value']
