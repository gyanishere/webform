from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    url(r'^member_form/', include('member_form.urls', namespace='member_form')),
    url(r'^admin/', include(admin.site.urls)),
)
