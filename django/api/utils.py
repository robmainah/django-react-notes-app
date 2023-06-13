from .models import Note
from .serializers import NoteSerializer

def getNoteDetail(request, pk):
    note = Note.objects.get(pk=pk)
    serializer = NoteSerializer(note, many=False)
    return serializer.data

def updateNote(request, pk):
    note = Note.objects.get(pk=pk)
    serializer = NoteSerializer(instance=note, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return serializer.data

def deleteNote(request, pk):
    note = Note.objects.get(pk=pk)
    note.delete()