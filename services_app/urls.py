from django.urls import path

from . import views

app_name = 'services'

urlpatterns = [
    path('', views.ServicesListView.as_view(), name='services'),
    path('service_request/', views.RequestCreateView.as_view(), name='request_new'),
    path('requsts_list/', views.RequstsListView.as_view(), name='requests_list'),
    path('requests/<int:pk>/details',views.RequestDetailView.as_view(), name='request_details'),
]

