import PropTypes from 'prop-types';

const LegalModal = ({ docType, onClose }) => {
  const renderContent = () => {
    switch(docType) {
      case 'eula':
        return (
          <div className="legal-content">
            <h2>End User License Agreement (EULA)</h2>
            <p>By using Aurora, you agree to the following terms:</p>
            <ul>
              <li>You will use the app only for lawful purposes</li>
              <li>You will not attempt to circumvent Spotify&apos;s API restrictions</li>
              <li>All intellectual property rights remain with Aurora</li>
            </ul>
            <p>This application is developed in compliance with Spotify&apos;s Developer Terms.</p>
          </div>
        );
      case 'privacy':
        return (
          <div className="legal-content">
            <h2>Privacy Policy</h2>
            <p>We collect and use the following information:</p>
            <ul>
              <li>Spotify user ID</li>
              <li>Basic profile information</li>
              <li>Usage data within the application</li>
            </ul>
            <p>We will not sell or rent your personal information.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="legal-modal-overlay" onClick={onClose}>
      <div className="legal-modal" onClick={(e) => e.stopPropagation()}>
        {renderContent()}
        <div className="modal-actions">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

LegalModal.propTypes = {
  docType: PropTypes.oneOf(['eula', 'privacy']).isRequired,
  onClose: PropTypes.func.isRequired
};

export default LegalModal;