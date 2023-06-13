from django.urls import path

from . import views

urlpatterns = [
    path('', views.getNotes, name='notes'),
    path('notes/', views.getNotes, name='notes'),
    # path('notes/', views.getNotes, name='notes'),
    # path('notes/<int:pk>/update/', views.updateNote, name='update'),
    # path('notes/<int:pk>/delete/', views.deleteNote, name='delete'),
    path('notes/<int:pk>/', views.getNote, name='note'),
]