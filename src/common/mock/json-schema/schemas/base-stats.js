const baseStats = {
    id: 'stats',
    type: 'array',
    // Returns exactly 10 items for stats,
    // this can be tuned up in the specific endpoint baseStats is imported
    minItems: 10,
    maxItems: 10,
    items: {}
}

export {baseStats};
