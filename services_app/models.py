from django.db import models
from django.utils import timezone
from django.urls import reverse
from django.contrib.auth.decorators import login_required
# Create your models here.

class ServiceRequest(models.Model):
    """ This is for the vistors services request """
    request_date = models.DateTimeField(default = timezone.now)

    visitor_name = models.CharField(
        max_length=250,
        blank=False,
        null=False,
    )

    visitor_email = models.EmailField(max_length=250,)

    visitor_phone = models.CharField(max_length=14,)

    SERVICES_TYPES = [
        ('None', 'Select a service'),
        ('Logo', 'Logo, Design'),
        ('Word', 'Document preparation (Word)'),
        ('LaTex', 'Document preparation (LaTex)'),
        ('Web_app', 'Web application (Django)'),
    ]
    service_type = models.CharField(
        max_length=7,
        blank=False,
        choices=SERVICES_TYPES,
        default='None',
    )

    service_description = models.TextField(max_length=1000,)

    def get_absolute_url(self):
        return reverse("about", kwargs=None)

    def __str__(self):
        return self.visitor_name
        




