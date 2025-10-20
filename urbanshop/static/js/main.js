// static/js/main.js (REPLACE entire file)
document.addEventListener('DOMContentLoaded', function() {
    console.log('UrbanShop loaded successfully!');
    
    // Auto-hide alerts after 5 seconds
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => {
        setTimeout(() => {
            alert.style.opacity = '0';
            setTimeout(() => alert.remove(), 500);
        }, 5000);
    });
});