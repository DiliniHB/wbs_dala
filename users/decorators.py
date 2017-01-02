from django.core.exceptions import PermissionDenied
from django.utils import six
from django.contrib.auth.decorators import user_passes_test
from django.core.exceptions import ObjectDoesNotExist
from django.http import HttpResponse
from settings.models import UserRole


def permission_required(perm):

    def has_perm(user):
        print 'you here '
        if user.id is not None:
            print ' there is user '
            if user.is_superuser:
                return True
            else:
                try:
                    user_perm_role = user.user_role
                    print user_perm_role
                except ObjectDoesNotExist:
                    user_perm = False

                if user_perm_role is not None:
                    role_name = user_perm_role.role_name
                    user_level_order = user_perm_role.order
                    perm_level = UserRole.objects.filter(code_name=perm).values('order')[:1]
                    print perm_level[0]['order']
                    perm_level_order = perm_level[0]['order']

                    if user_level_order <= perm_level_order:
                        print 'yes'
                        return True
                    else:
                        print 'no'
                        raise PermissionDenied
                        return False
                else:
                    print 'no object'
                    raise PermissionDenied
        else:
            print 'no user'
            return False

    return user_passes_test(has_perm, login_url='/admin/login/')


def super_user_permission():
    def has_perm(user):
        print 'you here '
        if user.id is not None:
            print ' there is user '
            if user.is_superuser:
                return True
            else:
                raise PermissionDenied
        else:
            return False

    return user_passes_test(has_perm, login_url='/admin/login/')