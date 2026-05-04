
document.addEventListener('DOMContentLoaded', () => {
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'lead-modal-overlay';
    modalOverlay.innerHTML = `
        <div class="lead-modal">
            <button class="lead-modal-close" aria-label="Close">&times;</button>
            <h2>Contact Akshit Traders</h2>
            <p>Please share your details to view contact information.</p>
            <form class="lead-form">
                <label>
                    Your Name
                    <input type="text" name="name" required placeholder="John Doe">
                </label>
                <label>
                    Purpose of Enquiry
                    <select name="purpose" required>
                        <option value="">Select Purpose</option>
                        <option value="Bulk Order">Bulk Order Enquiry</option>
                        <option value="Product Samples">Product Samples</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
                <button type="submit" class="primary-btn">View Contact Details <span>›</span></button>
            </form>
        </div>
    `;
    document.body.appendChild(modalOverlay);

    const form = modalOverlay.querySelector('.lead-form');
    const closeBtn = modalOverlay.querySelector('.lead-modal-close');
    let activeTrigger = null;

    // Handle Triggers
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('view-trigger')) {
            activeTrigger = e.target;
            modalOverlay.classList.add('active');
        }
    });

    closeBtn.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
    });

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) modalOverlay.classList.remove('active');
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const name = formData.get('name');
        const purpose = formData.get('purpose');

        // Reveal logic
        if (activeTrigger) {
            const parent = activeTrigger.parentElement;
            const hiddenSpan = parent.querySelector('.revealed-contact');
            
            if (hiddenSpan) {
                activeTrigger.style.display = 'none';
                hiddenSpan.style.display = 'inline';
            }

            // Simulate lead logging
            console.log(`Lead Captured: ${name} (${purpose})`);
            
            // Optionally open mailto if it was an email click
            if (activeTrigger.dataset.type === 'email') {
                window.location.href = `mailto:admin@akshittraders.com?bcc=akshitsajan31@gmail.com&subject=Enquiry from ${name}&body=Purpose: ${purpose}`;
            }
        }

        modalOverlay.classList.remove('active');
        form.reset();
    });
});
