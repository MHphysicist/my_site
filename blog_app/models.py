from django.db import models
from django.utils import timezone
from django.urls import reverse

# Create your models here.
class Post(models.Model):
    author = models.ForeignKey('auth.User', on_delete=models.DO_NOTHING, blank=True)
    
    SUBJECTS_TYPES = [
        ('None', 'select subject'),
        ('Physics', 'Physics'),
        ('Programming', 'Programming'),  
        ('Django', 'Django'),
        ('Learning', 'Learning'),
        ('Tec talk', 'Tec talk'),
        ('Personal', 'Personal'),
    ]
    subject_type = models.CharField(
        max_length=50,
        blank=False,
        choices=SUBJECTS_TYPES,
        default='None',
    )

    title = models.CharField(max_length=500)
    image = models.ImageField(upload_to='images/', blank=True)
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
    
class VisitorMessage(models.Model):
    """ This is for the vistors messages """
    request_date = models.DateTimeField(default = timezone.now)

    visitor_name = models.CharField(
        max_length=250,
        blank=False,
        null=False,
    )

    visitor_email = models.EmailField(max_length=250, blank=True)

    visitor_phone = models.CharField(max_length=14, blank=True)

    message_subject = models.CharField(max_length=250,)

    message_text = models.TextField(max_length=1000,)

    def get_absolute_url(self):
        return reverse("about", kwargs=None)

    def __str__(self):
        return self.visitor_name