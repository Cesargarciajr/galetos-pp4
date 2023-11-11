from django.contrib import admin
from .models import Post, NewOrder


@admin.register(NewOrder)
class PostNewOrder(admin.ModelAdmin):
    list_display = ('created_on', 'date', 'author', 'quantity', 'status')
    list_filter = ('created_on', 'date', 'author', 'status')
    search_fields = ('created_on', 'date', 'author',
                     'first_name', 'last_name', 'phone_number', 'email')
    actions = ['approve_orders']

    def approve_orders(self, request, queryset):
        queryset.update(status=True)
