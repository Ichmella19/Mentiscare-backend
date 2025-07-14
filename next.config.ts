import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   async headers() {
        return [
            {
                // Here you may add your source(s) using a regular expression.
                source: "/api/auth/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    // Here you add your whitelisted origin
                    { key: "Access-Control-Allow-Origin", value: "http://localhost:5173" },
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    }
};

export default nextConfig;
