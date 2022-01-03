from django.db import models


class SurveyAnswers(models.Model):
    childAge = models.IntegerField()
    childGender = models.IntegerField(choices=[
        (0, 'UNKNOWN'), (1, 'MALE'), (2, 'FEMALE'), (9, 'NOT_APPLICABLE')
    ])
    parentAnswerArray = models.CharField(max_length=100)

    def __str__(self):
        return self.parentAnswerArray


class ParentQuestions(models.Model):
    title = models.CharField(max_length=50)
    value = models.CharField(max_length=50)
    text = models.TextField()
