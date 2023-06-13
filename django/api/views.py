from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Note
from .serializers import NoteSerializer
from .utils import getNoteDetail, updateNote, deleteNote

@api_view(['GET', 'POST'])
def getNotes(request):
    if request.method == 'GET':
        notes = Note.objects.all()
        serializer = NoteSerializer(notes, many=True)
        return Response(serializer.data)
    
    if request.method == 'POST':
        note = Note.objects.create(body=request.data['body'])
        serializer = NoteSerializer(note, many=False)
        return Response(serializer.data)
        

@api_view(['GET', 'PUT', 'DELETE'])
def getNote(request, pk):
    if request.method == 'GET':
        return Response(getNoteDetail(request, pk))
    
    if request.method == 'PUT':
        note = updateNote(request, pk)            
        return Response(note)
    
    if request.method == 'DELETE':
        deleteNote(request, pk)
        return Response('Note deleted successfully')
