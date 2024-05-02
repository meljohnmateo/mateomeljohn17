
      function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("openBtn").style.opacity = "0"; // Fade out the open button
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("openBtn").style.opacity = "1"; // Fade in the open button
}


      function goToCashier() {
    window.location.href = "virtual_cashier.html";
}


        function toggleUserProfileMenu() {
            var menu = document.getElementById("userProfileMenu");

        if (menu.style.display === "none") {
        menu.style.display = "block";
        } else {
        menu.style.display = "none";
    }
}
            var cartItemCount = [0, 0, 0, 0];
            var totalItems = 0;

        function addToCart(index) {
            cartItemCount[index - 1]++;
            totalItems++;
            updateItemCounts();
            updateCheckoutCount();
        }

        function updateItemCounts() {
            for (var i = 1; i <= 4; i++) {
                document.getElementById("cartCount" + i).textContent = cartItemCount[i - 1];
            }
            document.getElementById("totalItems").textContent = totalItems;
        }

        function updateCheckoutCount() {
            var checkoutCount = cartItemCount.reduce((a, b) => a + b, 0);
            document.getElementById("checkoutCount").textContent = checkoutCount;
        }

         function search() {
            var searchTerm = document.getElementById("searchInput").value;

          if (searchTerm !== undefined && searchTerm !== null && searchTerm !== '') {
           alert("--" + searchTerm + "-- keyword not found. Try again later." )
   
         } else {
          alert("Please enter valid keyword.")
}

        }

        // Skip ad
        function skipAd() {
        document.getElementById('ads').style.display = 'none';
}


