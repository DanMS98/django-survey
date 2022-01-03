
from rest_framework import serializers
from .models import SurveyAnswers, ParentQuestions


class SurveyAnswersSerializer(serializers.ModelSerializer):
    class Meta:
        model = SurveyAnswers
        fields = "__all__"


class ParentQuestionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ParentQuestions
        fields = "__all__"

