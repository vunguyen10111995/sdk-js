export default (code: string): string => {
    if (code.startsWith('https://docs.google.com/presentation/d/')) {
        const match = code.match(/[-\w]{25,}/);
        if (!match) {
            return '';
        }
        code = match[0];
    }

    code = `https://docs.google.com/presentation/d/${encodeURIComponent(code)}/embed?start=false&loop=false&delayms=3000`;

    return '<div class="embed-responsive embed-responsive-16by9">' +
        `<iframe class="embed-responsive-item" src="${code}" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>` +
        '</div>';
};
