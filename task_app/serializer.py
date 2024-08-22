from .models import Task
from rest_framework import serializers

class TaskSerializer(serializers.Modelserializer):
    class Meta:
        model = Task
        fields = ('id', 'title', 'description', 'done', 'create_at')
        read_only_fieds = ('id', 'create_at')