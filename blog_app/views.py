from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.decorators import login_required
from blog_app import models, forms
from django.utils import timezone
from django.urls import reverse_lazy
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic.base import TemplateView #ListView, DetailView, CreateView, UpdateView,Deleteview,
from django.views.generic import  (ListView,
                                  DetailView,CreateView,
                                  UpdateView,DeleteView)


# Create your views here.
class AboutView(TemplateView):
    template_name = 'about.html'

    # Post views
class PostListView(ListView):
    model = models.Post

    def get_queryset(self):
        return models.Post.objects.filter(publish_date__lte=timezone.now()).order_by('-publish_date')
    
class PostDetailView(DetailView):
    model = models.Post

class PostCreateView(LoginRequiredMixin, CreateView):
    login_url = '/login/'
    redirect_field_name = 'blog_app/post_detail.html'

    form_class = forms.PostForm

    model = models.Post
     
class PostUpdateView(LoginRequiredMixin, UpdateView):
    login_url = '/login/'
    redirect_field_name = 'blog_app/post_detail.html'

    form_class = forms.PostForm

    model = models.Post

class PostDeleteView(LoginRequiredMixin, DeleteView):
    model = models.Post
    success_url = reverse_lazy('post_list')


class DraftListView(LoginRequiredMixin ,ListView):
    login_url = '/login/'
    redirect_field_name = 'blog/post_list.html'
    model = models.Post

    def get_queryset(self):
        return models.Post.objects.filter(publish_date__isnull=True).order_by('create_date')
 
###################################3
# ###############################33        

# Comment views
@login_required
def post_publish(request, pk):
    post = get_object_or_404(models.Post, pk=pk)
    post.publish()
    return redirect('post_detail', pk=pk)

#@login_required
def add_comment_to_post(request, pk):
    post = get_object_or_404(models.Post, pk=pk)
    if request.method == 'POST':
        form = forms.CommentForm(request.POST)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.post = post
            comment.save()
            return redirect('post_detail', pk=post.pk)
    else:
        form = forms.CommentForm()
        return render(request, 'blog_app/comments_form.html',{'form':form})

@login_required
def comment_approve(request, pk):
    comment = get_object_or_404(models.Comment, pk=pk)
    comment.approve()
    return redirect('post_detail', pk=comment.post.pk)

@login_required
def comment_remove(request, pk):
    comment = get_object_or_404(models.Comment, pk=pk)
    post_pk = comment.post.pk
    comment.delete()
    return redirect('post_detail', pk=comment.post.pk)