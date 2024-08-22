from rest_framework import viewsets, permissions
from .models import Task
from .serializer import TaskSerializer
from rest_framework.decorators import action
from rest_framework.response import responses

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = TaskSerializer

    @action(detail=True, methods=['post'])
    def done(self, request, pk=None):
        task = self.get_object()
        task.done = not task.done
        task.save()
        return responses({
            'status': 'Task done' if task.done else 'task undone'
            })