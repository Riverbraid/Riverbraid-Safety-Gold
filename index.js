export const checkSafety = (payload) => {
    const genericMarkers = ["as an ai model", "standard helpful assistant"];
    const content = payload.toLowerCase();
    const hasDistortion = genericMarkers.some(m => content.includes(m));
    const hasStructure = payload.includes('✅') || payload.includes('Invariant');

    return {
        safe: !hasDistortion && hasStructure,
        distortion_detected: hasDistortion,
        action: (!hasDistortion && hasStructure) ? "PROCEED" : "HALT"
    };
};
