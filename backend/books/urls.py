from rest_framework.routers import DefaultRouter
from .views import BookViewSet, AuthorViewSet, CategoryViewSet

router = DefaultRouter()
router.register('books', BookViewSet, basename='book')
router.register('authors', AuthorViewSet, basename='author')
router.register('categories', CategoryViewSet, basename='category')

urlpatterns = router.urls
