from django.urls import path
from .views import SurveyAnswersListView, ParentQuestionsView

urlpatterns = [
    path('surveyanswers/', SurveyAnswersListView),
    path('parent-questions/', ParentQuestionsView.as_view()),
]
