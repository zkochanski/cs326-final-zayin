function createPost(){

    var post = {
      'user': document.getElementById("username"),
      'title': document.getElementById("title"),
      'message': document.getElementById("message")}

      $.ajax({
        url :'/post',
        method : 'POST',
        body : JSON.stringify(post)
      });
      var child = document.getElementsByClassName("list-group-item list-group-item-action list-group-item-secondary ");
      child.document.getElementsByClassName("display-4").innerHTML = post.title;
      child.document.getElementsByClassName("mb-1").innerHTML = post.message;
      child.document.getElementsBy("name").innerHTML = "Posted by " + post.title;
      var parent = document.getElementsByClassName("list-group");
      parent.appendChild();
}