const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let firstChecked;

function handleCheck(e) {
  // Check if they had the shift key down
  // AND check that they are checking it
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // loop over every single checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === firstChecked) {
        inBetween = !inBetween;
        console.log('Starting to check them in between!');
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  firstChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));