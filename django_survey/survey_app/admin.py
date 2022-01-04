from django.contrib import admin
from .models import SurveyAnswers, ParentQuestions, ChildQuestion, ChildSurveyAnswers

admin.site.register(SurveyAnswers)
admin.site.register(ParentQuestions)
admin.site.register(ChildQuestion)
admin.site.register(ChildSurveyAnswers)