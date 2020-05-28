function linkResolver(doc) {
    if(doc.type === 'page'){
        return `/${doc.uid}`;
    }

    return '/';
};

export const linkResolver