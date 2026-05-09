import { useEffect } from 'react';

interface Props {
  open: boolean;
  onClose: () => void;
  industryLabel: string;
}

export default function BookingModal({ open, onClose, industryLabel }: Props) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Book free IT assessment">
      <div className="modal-window">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close booking form">
          ×
        </button>

        <div className="modal-body">
          <p className="section-label">Free IT Assessment</p>
          <h2 className="text-display-md">Book a free IT assessment for {industryLabel}.</h2>
          <p className="text-body-lg">
            Share your biggest pain points and we’ll send a custom action plan for your team.
          </p>

          <form className="booking-form" onSubmit={(event) => event.preventDefault()}>
            <label>
              Company name
              <input type="text" name="company" placeholder="Your construction company" />
            </label>

            <label>
              Email address
              <input type="email" name="email" placeholder="name@company.com" />
            </label>

            <label>
              Phone number
              <input type="tel" name="phone" placeholder="(555) 123-4567" />
            </label>

            <label>
              What is your biggest IT pain?
              <textarea name="message" rows={4} placeholder="Connectivity, project tools, security, etc." />
            </label>

            <div className="booking-form__actions">
              <button className="btn-primary" type="submit">
                Submit request
              </button>
              <button className="btn-secondary" type="button" onClick={onClose}>
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
