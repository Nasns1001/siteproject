
from rest_framework import routers

from django.urls import path, include
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView, SpectacularRedocView

from .views import StudentViewSet, ProjectViewSet

router = routers.DefaultRouter()

router.register(r'Student', StudentViewSet)
router.register(r'Project', ProjectViewSet)


urlpatterns = router.urls + [
path('doc/schema/', SpectacularAPIView.as_view(), name='schema'),
path('doc/docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
path('doc/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
]