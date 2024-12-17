
from rest_framework import serializers

from .models import Project, Curator, SP, CP,Student


# Это класс ItemSerializer, который наследует serializers.ModelSerializer
class StudentSerializer(serializers.ModelSerializer):

   # Метаданные сериализатора
   class Meta:

       # Модель, которую мы сериализуем
       model =Student

       # Поля, которые мы сериализуем -все поля модели
       fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):

   # Метаданные сериализатора
   class Meta:

       # Модель, которую мы сериализуем
       model = Project

       # Поля, которые мы сериализуем -все поля модели
       fields = '__all__'


        
