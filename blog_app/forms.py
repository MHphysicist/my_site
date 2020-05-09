from django import forms
from .models import Post, Comment, VisitorMessage

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        managed = True
        fields = ('author', 'title', 'image', 'text',)

        """
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-control'}),
            'image': forms.FileInput(attrs={'class': 'form-control-file'}),
            'text': forms.Textarea(attrs={'class': 'form-control'}),
        }
        """


class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ('author', 'text',)
        
        """
        widgets = {
            'author': forms.TextInput(attrs={'class': 'form-control'}),
            'text': forms.Textarea(attrs={'class': 'form-control'}),
        }
        """
        
class MessageForm(forms.ModelForm):
    class Meta:
        model = VisitorMessage
        fields = ("visitor_name", "visitor_email", "visitor_phone", "message_subject", "message_text",)