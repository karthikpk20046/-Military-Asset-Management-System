// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Sidebar toggle
    const toggleSidebar = document.getElementById('toggleSidebar');
    const sidebar = document.querySelector('.sidebar');
    
    toggleSidebar.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
    });

    // Page navigation
    const navItems = document.querySelectorAll('[data-page]');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            document.querySelectorAll('.page-content').forEach(content => {
                content.classList.add('hidden');
            });
            document.getElementById(`${page}-page`).classList.remove('hidden');
            
            // Update active state in sidebar
            document.querySelectorAll('.nav-item').forEach(navItem => {
                navItem.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // Net Movement Modal
    const netMovementCard = document.getElementById('net-movement-card');
    const netMovementModal = document.getElementById('net-movement-modal');
    const closeNetMovementModal = document.getElementById('close-net-movement-modal');
    
    if (netMovementCard && netMovementModal) {
        netMovementCard.addEventListener('click', function() {
            netMovementModal.classList.add('active');
        });
        
        closeNetMovementModal.addEventListener('click', function() {
            netMovementModal.classList.remove('active');
        });
    }

    // New Purchase Modal
    const newPurchaseBtn = document.getElementById('new-purchase-btn');
    const newPurchaseModal = document.getElementById('new-purchase-modal');
    const closeNewPurchaseModal = document.getElementById('close-new-purchase-modal');
    
    if (newPurchaseBtn && newPurchaseModal) {
        newPurchaseBtn.addEventListener('click', function() {
            newPurchaseModal.classList.add('active');
        });
        
        closeNewPurchaseModal.addEventListener('click', function() {
            newPurchaseModal.classList.remove('active');
        });
    }

    // Similar handlers for other modals...
});
