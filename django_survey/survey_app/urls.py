from django.urls import path
from .views import SurveyAnswersListView, ParentQuestionsView, ChildQuestionView, childSurveyAnswersListView

urlpatterns = [
    path('surveyanswers/', SurveyAnswersListView),
    path('child-surveyanswers/', childSurveyAnswersListView),
    path('parent-questions/', ParentQuestionsView.as_view()),
    path('child-questions/', ChildQuestionView.as_view()),
]
