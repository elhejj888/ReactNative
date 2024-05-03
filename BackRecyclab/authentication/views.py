from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from authentication.models import User

# Create your views here.
@api_view(['POST'])
def login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'success': True, 'message': 'Login successful'})
        else:
            return JsonResponse({'success': False, 'message': 'Invalid username or password'})
    else:
        return render(request, 'login.html')

def logout(request):
    logout(request)
    return JsonResponse({'success': True, 'message': 'Logout successful'})

@api_view(['POST'])
def test(request):

    return Response({'success': True, 'message': 'Test successful'})

@api_view(['POST'])
def subscribe(request):
    if request.method == 'POST':
        data = request.data
        username = data.get('username')
        password = data.get('password')
        phone = data.get('phone')
        first_name = data.get('first_name')
        last_name = data.get('last_name')
        email = data.get('email')
        address = data.get('address')
        is_admin = data.get('is_admin', False)  # Default to False if is_admin is not provided

        print("_______________________________________________________")
        print(username, password, phone, first_name, last_name, email, address, is_admin)
        print("_______________________________________________________")

        try:
            # Create a new user object
            user = User.objects.create_user(
                username=username,
                password=password,
                first_name=first_name,
                last_name=last_name,
                email=email,
                phone=phone,
                address=address,
                is_admin=is_admin
            )
            return Response({'success': True, 'message': 'Account created successfully'})
        except Exception as e:
            return Response({'success': False, 'message': str(e)}, status=500)

    else:
        return Response({'success': False, 'message': 'Invalid request method'}, status=405)
