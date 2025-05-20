// charts.js
document.addEventListener('DOMContentLoaded', function() {
    // Asset Distribution Chart
    const assetCtx = document.getElementById('assetDistributionChart');
    if (assetCtx) {
        new Chart(assetCtx, {
            type: 'doughnut',
            data: {
                labels: ['Vehicles', 'Weapons', 'Ammunition', 'Communication', 'Other'],
                datasets: [{
                    data: [15, 35, 30, 15, 5],
                    backgroundColor: [
                        '#3B82F6',
                        '#10B981',
                        '#F59E0B',
                        '#8B5CF6',
                        '#EF4444'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }

    // Movement Trend Chart
    const movementCtx = document.getElementById('movementTrendChart');
    if (movementCtx) {
        new Chart(movementCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        label: 'Purchases',
                        data: [20, 35, 25, 45, 30, 50],
                        borderColor: '#3B82F6',
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        fill: true
                    },
                    {
                        label: 'Transfers In',
                        data: [10, 15, 12, 18, 20, 25],
                        borderColor: '#10B981',
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        fill: true
                    },
                    {
                        label: 'Transfers Out',
                        data: [5, 8, 10, 12, 15, 20],
                        borderColor: '#EF4444',
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        fill: true
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});
