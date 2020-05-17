from django.shortcuts import render, redirect
from . import models, forms
from django.views.generic.base import TemplateView #ListView, DetailView, CreateView, UpdateView,Deleteview,
from django.views.generic import  (ListView,
                                  DetailView,CreateView,
                                  UpdateView,DeleteView)
# Create your views here.
from django.http import HttpResponse


class ServicesListView(TemplateView):
    template_name = 'services_list.html'
     
class RequestCreateView(CreateView):
    form_class = forms.RequestForm
    model = models.ServiceRequest
    template_name = 'services_app/request_form.html'
    redirect_field_name = 'about'

class RequstsListView(ListView):
    model = models.ServiceRequest
    #context_object_name = ' '
    template_name='requests_list.html'


class RequestDetailView(DetailView):
    model = models.ServiceRequest
