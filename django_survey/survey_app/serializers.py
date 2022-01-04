
from rest_framework import serializers
from .models import SurveyAnswers, ParentQuestions, ChildQuestion, ChildSurveyAnswers


class SurveyAnswersSerializer(serializers.ModelSerializer):
    class Meta:
        model = SurveyAnswers
        fields = "__all__"


class ChildSurveyAnswersSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChildSurveyAnswers
        fields = "__all__"


class ParentQuestionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ParentQuestions
        fields = "__all__"


class ChildQuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChildQuestion
        fields = "__all__"

