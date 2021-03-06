from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from rest_framework import generics, status
from django.views.decorators.csrf import csrf_exempt

from .models import SurveyAnswers, ParentQuestions, ChildQuestion, ChildSurveyAnswers
from .serializers import SurveyAnswersSerializer, ParentQuestionsSerializer, ChildQuestionSerializer,\
    ChildSurveyAnswersSerializer


class ParentQuestionsView(generics.ListAPIView):
    queryset = ParentQuestions.objects.all()
    serializer_class = ParentQuestionsSerializer


class ChildQuestionView(generics.ListAPIView):
    queryset = ChildQuestion.objects.all()
    serializer_class = ChildQuestionSerializer


@csrf_exempt
def childSurveyAnswersListView(request):

    if request.method == 'GET':
        surveyanswers = ChildSurveyAnswers.objects.all()
        serializer = ChildSurveyAnswersSerializer(surveyanswers, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = ChildSurveyAnswersSerializer(data=data)
        print("data:", data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        else:
            return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def SurveyAnswersListView(request):

    if request.method == 'GET':
        surveyanswers = SurveyAnswers.objects.all()
        serializer = SurveyAnswersSerializer(surveyanswers, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = SurveyAnswersSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        else:
            return JsonResponse(serializer.errors, status=400)




