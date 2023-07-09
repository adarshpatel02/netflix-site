document.addEventListener('DOMContentLoaded', function() {
    var questions = document.getElementsByClassName('faq-question');
  
    Array.from(questions).forEach(function(question) {
      question.addEventListener('click', function() {
        var answer = this.nextElementSibling;
  
        if (answer.style.display === 'block') {
          answer.style.display = 'none';
        } else {
          answer.style.display = 'block';
        }
      });
    });
  });
  