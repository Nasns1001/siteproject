from django.db import models
from tinymce.models import HTMLField

# Create your models here.

from django.db import models 
 
class Student(models.Model):
    fio = models.CharField(max_length=200) 
    number_stud_b = models.IntegerField()
    course = models.IntegerField() 
    group = models.CharField(max_length=100)
   
    class Meta:
        verbose_name = 'Студент'
        verbose_name_plural = 'Студенты' 



class Project(models.Model): 
    title = models.CharField(max_length=500) 
    result = models.TextField() 
    leader = models.CharField(max_length=200) 
 
    description = HTMLField()
    class Meta:
        verbose_name = 'Проект'
        verbose_name_plural = 'Проекты'

class Curator(models.Model):
    fio = models.CharField(max_length=200) 
    phone_number = models.IntegerField()
    # project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='curators') 

   
    class Meta:
        verbose_name = 'Куратор'
        verbose_name_plural = 'Кураторы'
    
        
class SP(models.Model): 
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name="stud_rel") 
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name ="proj_rel") 
   
    class Meta:
        verbose_name = 'Связь студент - проект'
        verbose_name_plural = 'Связь студент - проект'
    
class CP(models.Model): 
    curator = models.ForeignKey(Curator, on_delete=models.CASCADE) 
    project = models.ForeignKey(Project, on_delete=models.CASCADE) 
  
    class Meta:
        verbose_name = 'Связь куратор - проект'
        verbose_name_plural = 'Связь куратор - проект'

class News(models.Model):
    newsId = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200) 
    description = models.TextField() 
    image = models.ImageField(upload_to='images/')
    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'

class Announcement(models.Model):
    announcementId = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200) 
    description = models.TextField() 
    image = models.ImageField(upload_to='images/')
    class Meta:
        verbose_name = 'Анонс'
        verbose_name_plural = 'Анонсы'

class Expert(models.Model):
    expertId = models.AutoField(primary_key=True)
    fio = models.CharField(max_length=200) 
    phone_number = models.IntegerField()

    class Meta:
        verbose_name = 'Эксперт'
        verbose_name_plural = 'Эксперты'


