function changeColor(element) {
    // List of colors to cycle through
    const colors = ['#ffebcd', '#add8e6', '#f5deb3', '#f0e68c'];
    
    // Get current background color
    let currentColor = window.getComputedStyle(element).backgroundColor;
    
    // Find the next color in the list
    let newColor = colors[(colors.indexOf(currentColor) + 1) % colors.length];
    
    // Set the new background color
    element.style.backgroundColor = newColor;
}
