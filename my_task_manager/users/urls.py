from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    path('', views.task_list, name='home'),
    path('register/', views.register_user, name='register'),
    path('accounts/login/', views.login_user, name='login'),
    path('logout/', views.logout_user, name='logout'),
    path('tasks/', views.task_list, name='task_list'),
    path('tasks/create/', views.task_create, name='task_create'),
    path('tasks/<int:task_id>/edit/', views.task_edit, name='task_edit'),
    path('tasks/<int:task_id>/delete/', views.task_delete, name='task_delete'),
]
