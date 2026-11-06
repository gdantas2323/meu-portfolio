    import { NextResponse } from "next/server";

    export async function GET(request) {
        return NextResponse.json({ 
            status: "Sucesso",
            message: "Olá, primeira API!",
            timestamp: new Date().toISOString()});
        }           