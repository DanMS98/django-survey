from django.urls import path
from .views import SurveyAnswersListView

urlpatterns = [
    path('surveyanswers/', SurveyAnswersListView),
]
