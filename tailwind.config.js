const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: ['./pages/**/*.{vue,html}'],
    media: false, // or 'media' or 'class'
    defaultLineHeights: false,
    theme: {
        extend: {
            boxShadow: {
                el: '0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)',
            },
            zIndex: {
                max: '999999',
            },

            colors: {
                primary: '#FEDD00',
                main: '#2f3542',
                success: '#67c23a',
            },
        },
        borderRadius: rem2rpx(defaultTheme.borderRadius),
        columns: rem2rpx(defaultTheme.columns),
        fontSize: rem2rpx(defaultTheme.fontSize),
        lineHeight: rem2rpx(defaultTheme.lineHeight),
        maxWidth: ({ theme, breakpoints }) => ({
            ...rem2rpx(defaultTheme.maxWidth({ theme, breakpoints })),
        }),
        spacing: rem2rpx(defaultTheme.spacing),
        letterSpacing: rem2rpx(defaultTheme.letterSpacing),
    },
    variants: {},
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/typography'),
        function ({ addVariant, addUtilities }) {
            addUtilities({
                '.absolute-center': {
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                },
                '.absolute-x-center': {
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                },
            })
        },
    ],
    corePlugins: {
        preflight: false,
    },
}
function rem2rpx(input, fontSize = 32) {
    if (input == null) {
        return input
    }
    switch (typeof input) {
        case 'object':
            if (Array.isArray(input)) {
                return input.map(val => rem2rpx(val, fontSize))
            } else {
                const ret = {}
                for (const key in input) {
                    ret[key] = rem2rpx(input[key])
                    ret['-' + key] = '-' + rem2rpx(input[key])
                }
                return ret
            }
        case 'string':
            return input.replace(/(\d*\.?\d+)rem$/, (_, val) => {
                return parseFloat(val) * fontSize + 'rpx' + '  /*' + parseFloat(val) * (fontSize / 2) + 'px*/'
            })
        default:
            return input
    }
}
