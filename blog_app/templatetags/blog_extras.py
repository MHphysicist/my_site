from django import template
from django.template.defaultfilters import stringfilter

register = template.Library()

@register.filter
@stringfilter
def txt_prev(value, arg):
    """
    This only show "arg" number of letters from the strig "value"
    """
    arg = int(arg)
    return value[:arg]