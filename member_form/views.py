from django.shortcuts import render
from django.http import HttpResponse
import json

def index(request):
	return render(request, 'member_form/index.html')

def form_values(request):
	print "in the method"
	print request.POST
	return HttpResponse(json.dumps({"success": True}), content_type='application/json')