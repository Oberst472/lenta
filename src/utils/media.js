export const BREAKPOINTS = {
    sm: {
        value: 480,
        direction: 'max'
    },
    md: {
        value: 768,
        direction: 'max'
    },
    lg: {
        value: 1024,
        direction: 'max'
    }
}

export function media(breakpointName, _direction) {
    const windowWidth = window.innerWidth
    const breakpointConfig = BREAKPOINTS[breakpointName]
    const direction = _direction ? _direction : breakpointConfig.direction

    return direction === 'max' ? windowWidth <= breakpointConfig.value : windowWidth > breakpointConfig.value
}

// window.addEventListener('resize', () => {
//     console.log('l', media('l', 'min'))
// })
