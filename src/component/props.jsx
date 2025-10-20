// --- Child Component: Renders a single card with full details (Styles Inline) ---
const FeatureCard = ({ cardData }) => {
  // Nested destructuring remains the same
  const { id, heading, subheading, content, bgColor } = cardData;

  return (
    // Style object is now defined directly inside the 'style' attribute
    <div 
      style={{
        flex: 1,
        padding: '20px',
        margin: '10px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: bgColor || '#f0f0f0', // Use provided color or default
        minWidth: '200px',
      }}
    >
      <span style={{ fontSize: '12px', color: '#666' }}>ID: {id}</span>
      <h3 style={{ marginBottom: '5px' }}>{heading}</h3>
      <h4 style={{ color: '#007bff', marginTop: '0', fontWeight: 'normal' }}>{subheading}</h4>
      <p>{content}</p>
    </div>
  );
};