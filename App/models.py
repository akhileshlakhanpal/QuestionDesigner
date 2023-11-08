from django.db import models


class statements(models.Model):
    statement = models.TextField(max_length=20000, null=True, default=None)
    type_of_research = models.TextField(max_length=200, null=True, default=None)
    research_topic = models.TextField(max_length=200, null=True, default=None)
    domain = models.TextField(max_length=200, null=True, default=None)

    def __str__(self):
        return self.statement


class questions(models.Model):
    question = models.TextField(max_length=20000, null=True, default=None)
    section = models.CharField(max_length=100, null=True, default=None)
    prd_usage = models.BooleanField(null=True, default=False)
    market_trend = models.BooleanField(null=True, default=False)
    customer_satisfaction = models.BooleanField(null=True, default=False)
    purchase_behaviour = models.BooleanField(null=True, default=False)
    price_perception = models.BooleanField(null=True, default=False)
    brand_awareness = models.BooleanField(null=True, default=False)
    brand_perception = models.BooleanField(null=True, default=False)
    adv_effectiveness = models.BooleanField(null=True, default=False)
    prd_development = models.BooleanField(null=True, default=False)
    market_seg = models.BooleanField(null=True, default=False)
    customer_feedback = models.BooleanField(null=True, default=False)
    comp_analysis = models.BooleanField(null=True, default=False)
    market_expansion = models.BooleanField(null=True, default=False)
    distribution_channels = models.BooleanField(null=True, default=False)
    customer_preferences = models.BooleanField(null=True, default=False)
    compliance_issues = models.BooleanField(null=True, default=False)
    market_potential = models.BooleanField(null=True, default=False)
    psychographics = models.BooleanField(null=True, default=False)
    tech_adoption = models.BooleanField(null=True, default=False)
    social_responsibility = models.BooleanField(null=True, default=False)

    def __str__(self):
        return self.question


class options(models.Model):
    row_option = models.TextField(max_length=20000, null=True, default=None)
    column_option = models.TextField(max_length=20000, null=True, default=None)

    def __str__(self):
        return self.option


class statement_to_question(models.Model):
    statement_id = models.IntegerField(null=True, default=None)
    question_id = models.IntegerField(null=True, default=None)

    def __str__(self):
        return self.statement_id


class question_to_option(models.Model):
    question_id = models.IntegerField(null=True, default=None)
    option_id = models.IntegerField(null=True, default=None)

    def __str__(self):
        return self.question_id
