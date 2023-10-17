<script>

    /* Make appear for 5 seconds. Fade in and then fade out */


    setTimeout(function() {
        document.getElementById("construction-banner").style.display = "block";
    }, 5000);

    setTimeout(function() {
        document.getElementById("construction-banner").style.opacity = "1";
    }, 5000);

    setTimeout(function() {
        document.getElementById("construction-banner").style.opacity = "0";
    }, 10000);

    setTimeout(function() {
        document.getElementById("construction-banner").style.display = "none";
    }, 10500);



    



</script>



<div id="construction-banner" class="fixed top-8 right-8 bg-yellow-100 px-8 py-5 rounded-xl border-2 text-slate-700 text-[12pt] font-semibold border-yellow-300">
    This website is currently under construction. Please check back later.
</div>