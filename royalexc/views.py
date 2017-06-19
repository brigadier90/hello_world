import os
from django.http import HttpResponse


def term_cond(request):
    file = open(os.path.join(os.path.dirname(os.path.dirname(__file__)), 'royalexc/documents/CFDs_Agreement.pdf'), 'rb').read()
    return HttpResponse(file, content_type='application/pdf')


def priv_pol(request):
    file = open(os.path.join(os.path.dirname(os.path.dirname(__file__)), 'royalexc/documents/Privacy_Policy.pdf'), 'rb').read()
    return HttpResponse(file, content_type='application/pdf')


def conf_int(request):
    file = open(os.path.join(os.path.dirname(os.path.dirname(__file__)), 'royalexc/documents/Conflict_of_Interest_Policy.pdf'), 'rb').read()
    return HttpResponse(file, content_type='application/pdf')


def ord_ex(request):
    file = open(os.path.join(os.path.dirname(os.path.dirname(__file__)), 'royalexc/documents/Order_Execution_Policy.pdf'), 'rb').read()
    return HttpResponse(file, content_type='application/pdf')


def risk_disclaimer(request):
    file = open(os.path.join(os.path.dirname(os.path.dirname(__file__)), 'royalexc/documents/Risk_Disclosure.pdf'), 'rb').read()
    return HttpResponse(file, content_type='application/pdf')
