import { NextResponse } from "next/server";

export function middleware(request) {
    const response = NextResponse.next();

    // Gérer la requête preflight OPTIONS
    if (request.method === 'OPTIONS') {
        response.headers.set('Access-Control-Allow-Credentials', 'true');
        response.headers.set('Access-Control-Allow-Origin', 'http://localhost:5173');
        response.headers.set('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT');
        response.headers.set(
            'Access-Control-Allow-Headers',
            'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
        );
        // Réponse sans corps pour preflight
        return new Response(null, {
            headers: response.headers,
            status: 204,
        });
    }

    // Pour toutes autres requêtes, ajouter les headers CORS
    response.headers.set('Access-Control-Allow-Credentials', 'true');
    response.headers.set('Access-Control-Allow-Origin', 'http://localhost:5173');
    response.headers.set('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT');
    response.headers.set(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    return response;
}