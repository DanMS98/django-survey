from django.urls import path
from .views import SurveyAnswersListView, ParentQuestionsView, ChildQuestionView

urlpatterns = [
    path('surveyanswers/', SurveyAnswersListView),
    path('child-surveyanswers/', SurveyAnswersListView),
    path('parent-questions/', ParentQuestionsView.as_view()),
    path('child-questions/', ChildQuestionView.as_view()),
]
