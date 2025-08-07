from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(["POST"])
def crear_cliente(request):
    """Crea un cliente de ejemplo."""
    return Response("cliente creado")


@api_view(["GET"])
def listar_clientes(request):
    """Lista clientes de ejemplo."""
    return Response("Lista de clientes")


@api_view(["DELETE"])
def eliminar_clientes(request):
    """Elimina un cliente de ejemplo."""
    return Response("Cliente eliminado")
