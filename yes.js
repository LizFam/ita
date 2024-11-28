<script>
function clickAction() {
  result.textContent = 'You're terrible.';
  if (correct.checked) {
    result.textContent = 'Of course, the only correct response is yes';
  }button.onclick = clickAction;
}

</script>
