from django.shortcuts import render


def index(request):
	return render(request, 'member_form/index.html')
