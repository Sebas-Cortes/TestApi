from django.urls import path
from . import views

urlpatterns = [
    path('crear_cliente/', views.crear_cliente, name='crear_cliente'),
    path('listar_clientes/', views.listar_clientes, name='listar_clientes'),
    path('eliminar_clientes/', views.eliminar_clientes, name='eliminar_clientes'),
]
