from django.contrib import admin

# Register your models here.
from .models import Project, Curator, SP, CP,Student


@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ('fio', 'number_stud_b', 'course', 'group')
    search_fields = ['fio']

# Администратор для модели Project
@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'leader', 'description')
    search_fields = ['title', 'leader']


# Администратор для модели Curator
@admin.register(Curator)
class CuratorAdmin(admin.ModelAdmin):
    list_display = ('fio', 'phone_number')
    search_fields = ['fio']


# Администратор для модели SP (связь студент-проект)
@admin.register(SP)
class SPAdmin(admin.ModelAdmin):
    list_display = ('student', 'project')
    search_fields = ['student__fio', 'project__title']  # Поиск по связанным полям
    autocomplete_fields = ['student', 'project']  # Добавление автоподстановки для связанных полей


# Администратор для модели CP (связь куратор-проект)
@admin.register(CP)
class CPAdmin(admin.ModelAdmin):
    list_display = ('curator', 'project')
    search_fields = ['curator__fio', 'project__title']  # Поиск по связанным полям
    autocomplete_fields = ['curator', 'project']  # Добавление автоподстановки для связанных полей  

from .models import News, Announcement, Expert

@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('newsId', 'title', 'description', 'image')
    search_fields = ['title', 'description']


@admin.register(Announcement)
class AnnouncementAdmin(admin.ModelAdmin):
    list_display = ('announcementId', 'title', 'description', 'image')
    search_fields = ['title', 'description']


@admin.register(Expert)
class ExpertAdmin(admin.ModelAdmin):
    list_display = ('expertId', 'fio', 'phone_number')
    search_fields = ['fio']  