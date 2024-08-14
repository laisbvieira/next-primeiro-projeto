//não precisa usar o 'use client' porque o link do next é projetado para funcionar corretamente em qualquer contexto (client ou server)

import NextLink from 'next/link';

export default function Link({children, href, ...props}) {
    return (

        <NextLink href={href} passHref>
        {children}
        </NextLink>

    );
}