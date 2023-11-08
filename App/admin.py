from django.contrib import admin
from .models import *
admin.site.register(statements)
admin.site.register(questions)
admin.site.register(options)
admin.site.register(statement_to_question)
admin.site.register(question_to_option)

