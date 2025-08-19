from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from django.db.models import Q

from database.models import UserModel
from database.serializers import UserSerializer, UserAutocompleteSerializer, UserProfilePictureSerializer

class UserModelViewSet(viewsets.ModelViewSet):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer
    # permission_classes=[IsAuthenticated]

    @action(detail=False, methods=["get"], url_path="autocomplete")
    def autocomplete(self, request):
        search = request.query_params.get("search", "")
        queryset = self.get_queryset().filter(
            Q(username__icontains=search) |
            Q(full_name__icontains=search) |
            Q(email__icontains=search)
        )
        serializer = UserAutocompleteSerializer(queryset, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=["post"], url_path="upload_profile_picture")
    def upload_profile_picture(self, request):
        user = request.user
        serializer = UserProfilePictureSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({
                "message": "Profile picture updated successfully.",
                "profile_picture": serializer.data["profile_picture"]
            })
        return Response(serializer.errors, status=400)
    
    @action(detail=False, methods=["get"], url_path="current", permission_classes=[IsAuthenticated])
    def current_user(self, request):
        user = request.user
        serializer = self.get_serializer(user)
        print("user", serializer.data)
        return Response(serializer.data)


from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.response import Response
from rest_framework import status
from datetime import timedelta
from django.conf import settings

class CookieTokenObtainPairView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        data = response.data

        access_token = data.get('access')
        refresh_token = data.get('refresh')

        if access_token and refresh_token:
            # Set the tokens in HttpOnly cookies
            response.set_cookie(
                key='access_token',
                value=access_token,
                httponly=True,
                secure=False,          # Set to True in production with HTTPS
                samesite='Lax',
                max_age=60 * 5,  # 5 minutes
                path="/",
            )
            response.set_cookie(
                key='refresh_token',
                value=refresh_token,
                httponly=True,
                secure=False,          # Set to True in production with HTTPS
                samesite='Lax',
                max_age=60 * 60 * 24 * 7  # 7 days
            )
            # Remove tokens from response body so they are only in cookies
            response.data.pop('access', None)
            response.data.pop('refresh', None)

        return response

