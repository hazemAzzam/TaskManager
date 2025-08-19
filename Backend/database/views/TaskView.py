from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.pagination import PageNumberPagination
from database.models import TaskModel
from database.serializers import TaskModelSerializer
from rest_framework.renderers import JSONRenderer


# Custom pagination class
class TaskPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = "page_size"
    max_page_size = 100

    def get_page_size(self, request):
        page_size = request.query_params.get(self.page_size_query_param)
        if page_size == 'all':
            return None  # disables pagination, returns all
        return super().get_page_size(request)


class TaskModelViewSet(viewsets.ModelViewSet):
    queryset = TaskModel.objects.all().order_by("-dueDate")
    serializer_class = TaskModelSerializer
    pagination_class = TaskPagination

    # Enable filtering, searching, ordering
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]

    # Filters
    filterset_fields = ["status", "priority", "assignee"]
    search_fields = ["title", "description"]
    ordering_fields = ["dueDate", "priority", "status"]
    ordering = ["-dueDate"]  # default ordering
