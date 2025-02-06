from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Task

def home(request):
    if request.method == 'POST':
        if 'delete_task' in request.POST: 
            task_id = request.POST['delete_task']
            Task.objects.filter(id=task_id).delete()
        elif 'task' in request.POST:  
            task_name = request.POST['task']
            Task.objects.create(task=task_name)
        
        return redirect('home')  

    tasks = Task.objects.all()
    return render(request, 'home.html', {'task': tasks})