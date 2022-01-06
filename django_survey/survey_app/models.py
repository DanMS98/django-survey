from django.db import models


class SurveyAnswers(models.Model):
    childAge = models.IntegerField()
    childGender = models.IntegerField(choices=[
        (0, 'UNKNOWN'), (1, 'MALE'), (2, 'FEMALE'), (9, 'NOT_APPLICABLE')
    ])
    parentAnswerArray = models.CharField(max_length=150)

    def __str__(self):
        return self.parentAnswerArray


class ChildSurveyAnswers(models.Model):

    childAnswerArray = models.CharField(max_length=100)
    score = models.IntegerField()

    def __str__(self):
        return str(self.score)


class ParentQuestions(models.Model):
    title = models.CharField(max_length=50)
    value = models.CharField(max_length=50)
    text = models.TextField()


class ChildQuestion(models.Model):
    title = models.CharField(max_length=50)
    text = models.TextField()
    """"------------------------------------------"""
    value0 = models.IntegerField()
    answer0 = models.CharField(max_length=150)
    value1 = models.IntegerField()
    answer1 = models.CharField(max_length=150)
    value2 = models.IntegerField()
    answer2 = models.CharField(max_length=150)


