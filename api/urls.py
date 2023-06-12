from django.urls import path

from . import views

urlpatterns = [
    path('', views.getNotes, name='notes'),
    path('notes/<int:pk>', views.getNote, name='note'),
]