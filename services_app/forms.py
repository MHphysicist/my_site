from django import forms
from .models import ServiceRequest

class RequestForm(forms.ModelForm):
    class Meta:
        model = ServiceRequest
        fields = ("visitor_name", "visitor_email", "visitor_phone", "service_type", "service_description")
