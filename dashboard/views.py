from django.shortcuts import render
from django.http import HttpResponse
from users.decorators import super_user_permission


@super_user_permission()
def index(request):   
    return render(request, 'dashboard/index.html')
    
def health_main(request):   
    return render(request, 'dashboard/health_main.html')
