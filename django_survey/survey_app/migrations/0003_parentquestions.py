# Generated by Django 3.2.10 on 2021-12-24 15:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('survey_app', '0002_alter_surveyanswers_childgender'),
    ]

    operations = [
        migrations.CreateModel(
            name='ParentQuestions',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('value', models.CharField(max_length=50)),
                ('text', models.TextField()),
                ('isAnswered', models.BooleanField(default=False)),
                ('isSelected', models.BooleanField(default=False)),
                ('choices', models.CharField(default='', max_length=3)),
            ],
        ),
    ]
