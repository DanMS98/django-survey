
from rest_framework import serializers
from .models import SurveyAnswers


class SurveyAnswersSerializer(serializers.ModelSerializer):

    class Meta:
        model = SurveyAnswers
        fields = "__all__"

