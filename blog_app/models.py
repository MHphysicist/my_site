from django.db import models
from django.utils import timezone
from django.urls import reverse

# Create your models here.
class Post(models.Model):
    author = models.ForeignKey('auth.User', on_delete=models.DO_NOTHING, blank=True)
    title = models.CharField(max_length=500)
    image = models.ImageField(upload_to='images/')
    text = models.TextField()
    create_date = models.DateTimeField(default = timezone.now)
    publish_date = models.DateTimeField(blank=True, null=True)

    def publish(self):
        self.publish_date = timezone.now()
        self.save()

    def aprove_comments(self):
        return self.comments.filter(approved_comment = True)
    
    def get_absolute_url(self):
        return reverse("post_detail", kwargs={"pk": self.pk})
    
    def __str__(self):
        return self.title

class Comment(models.Model):
    post = models.ForeignKey('blog_app.Post', on_delete=models.DO_NOTHING, blank=True, related_name='comments')
    author = models.CharField(max_length=200)
    text = models.TextField()
    create_date = models.DateTimeField(default = timezone.now)
    approved_comment = models.BooleanField(default=False)

    def approve(self):
        self.approved_comment = True
        self.save()
    
    def get_absolute_url(self):
        return reverse("post_detail", kwargs={"pk": self.pk})
    
    def __str__(self):
        return self.text