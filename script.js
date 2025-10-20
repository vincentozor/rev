// Mobile menu functionality
        const mobileMenu = document.querySelector('.mobile-menu');
        const mobileNav = document.querySelector('.mobile-nav');
        const mobileClose = document.querySelector('.mobile-close');
        const overlay = document.querySelector('.overlay');
        const body = document.body;

        function toggleMobileMenu() {
            mobileNav.classList.toggle('active');
            overlay.classList.toggle('active');
            body.style.overflow = body.style.overflow === 'hidden' ? '' : 'hidden';
        }

        mobileMenu.addEventListener('click', toggleMobileMenu);
        mobileClose.addEventListener('click', toggleMobileMenu);
        overlay.addEventListener('click', toggleMobileMenu);

        // Close mobile menu when clicking on links
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', toggleMobileMenu);
        });

        // Color selection functionality
        const colorOptions = document.querySelectorAll('.color-option');
        const colorName = document.querySelector('.color-name');
        
        const colorNames = {
            '#1a1a1a': 'Cosmic Black',
            '#f5f5dc': 'Pearl White',
            '#2e8b57': 'Emerald Green',
            '#9370db': 'Lunar Violet'
        };

        colorOptions.forEach(option => {
            option.addEventListener('click', function() {
                colorOptions.forEach(opt => opt.classList.remove('active'));
                this.classList.add('active');
                
                const color = this.style.backgroundColor;
                // Convert RGB to Hex for our color mapping
                const hexColor = rgbToHex(color);
                colorName.textContent = colorNames[hexColor] || 'Unknown Color';
            });
        });

        // Helper function to convert RGB to Hex
        function rgbToHex(rgb) {
            // If the color is already in hex format (from inline style)
            if (rgb.startsWith('#')) return rgb;
            
            // Extract RGB values from "rgb(r, g, b)" string
            const rgbValues = rgb.match(/\d+/g);
            if (!rgbValues || rgbValues.length < 3) return '#000000';
            
            const r = parseInt(rgbValues[0]).toString(16).padStart(2, '0');
            const g = parseInt(rgbValues[1]).toString(16).padStart(2, '0');
            const b = parseInt(rgbValues[2]).toString(16).padStart(2, '0');
            
            return `#${r}${g}${b}`;
        }

        // Search functionality
        const searchInput = document.querySelector('.search-bar input');
        const mobileSearchInput = document.querySelector('.mobile-search input');
        
        searchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                alert(`Searching for: ${this.value}`);
            }
        });

        mobileSearchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                alert(`Searching for: ${this.value}`);
                toggleMobileMenu();
            }
        });

        // Close menu with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
                toggleMobileMenu();
            }
        });