let breakpoint

// Get the current breakpoint
let getBreakpoint = function () {
	return window.getComputedStyle(document.body, ':before').content.replace(/\"/g, '');
};

// Calculate breakpoint on page load
breakpoint = getBreakpoint();
const useBreakpoint = () =>{
    // Recalculate breakpoint on resize
    window.addEventListener('resize', function () {
        breakpoint = getBreakpoint();
        console.log('Browser resized')
    }, false);

    return breakpoint
}

export { useBreakpoint }