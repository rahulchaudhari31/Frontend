/**
 * Renders title with highlighted text
 * Safely finds the highlighted text within the title and renders JSX with highlight styling
 * 
 * @param {string} title - The full title text
 * @param {string} highlightedText - The text to highlight (must exist in title)
 * @returns {JSX.Element} - JSX with highlighted portion styled
 */
export const renderTitleWithHighlight = (title, highlightedText) => {
  // If no highlighted text or it's empty, return title as-is
  if (!highlightedText || highlightedText.trim() === "") {
    return <>
    {title}
    </>;
  }

  const trimmedHighlight = highlightedText.trim();
  
  // Find the first occurrence of highlighted text in title (case-sensitive)
  const index = title.indexOf(trimmedHighlight);
  
  // If highlighted text not found in title, return title as-is
  if (index === -1) {
    return <>{title}</>;
  }

  // Split title into three parts: before, highlight, after
  const before = title.substring(0, index);
  const highlighted = title.substring(index, index + trimmedHighlight.length);
  const after = title.substring(index + trimmedHighlight.length);

  return (
    <>
      {before}
      <span style={{ color: "#F39308" }}>
        {highlighted}
      </span>
      {after}
    </>
  );
};

/**
 * Alternative: Plain text version (for non-JSX contexts)
 * Returns the title text without rendering
 * 
 * @param {string} title - The full title text
 * @param {string} highlightedText - The text to find (for validation purposes)
 * @returns {string} - The original title
 */
export const validateHighlightedText = (title, highlightedText) => {
  if (!highlightedText || highlightedText.trim() === "") {
    return true; // Empty highlight is valid
  }

  return title.includes(highlightedText.trim());
};
