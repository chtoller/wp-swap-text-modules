// Place this e.g. into an code or html element at the bottom of the page

<script>
var testimonial = [];

testimonial[0] = ['ks1'];
testimonial[1] = ['ks2'];
testimonial[2] = ['ks3'];
var activeIdx = 0;

function change() {
    for( let i = 0; i < testimonial.length; i++ ) {
        if( i == activeIdx) {
            let e = document.getElementById(testimonial[i]);
            e.classList.add("aktiv");
            e.parentElement.style.height = e.offsetHeight + "px";
            console.log("Aktiv: " + i);
            console.log("parent height: " +  e.offsetHeight + "px");
        } else {
            document.getElementById(testimonial[i]).classList.remove("aktiv");
        }
    }

  if (activeIdx == testimonial.length - 1) {
    activeIdx = 0;
  } else {
    activeIdx++;
  }

  setTimeout(change, 20000);
}

window.onload = change();
</script>
