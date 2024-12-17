from rest_framework import viewsets

from .models import Project, Curator, SP, CP,Student


from .serializers import  StudentSerializer,ProjectSerializer


# Это класс StudentViewSet, который наследует viewsets.ModelViewSet
class StudentViewSet(viewsets.ModelViewSet):

   # Запрос, который мы будем использовать для всех операций
   queryset = Student.objects.all()

   # Сериализатор, который мы будем использовать для всех операций
   serializer_class = StudentSerializer

class ProjectViewSet(viewsets.ModelViewSet):

   # Запрос, который мы будем использовать для всех операций
   queryset = Project.objects.all()

   # Сериализатор, который мы будем использовать для всех операций
   serializer_class = ProjectSerializer
   