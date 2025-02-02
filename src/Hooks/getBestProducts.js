import { useState, useEffect } from "react";

export default async function getBestProducts() {
            try {
                const result = await fetch('http://localhost:8000/get/bestweapons');
                if (result.ok) {
                    const bests = await result.json();
                    return bests
                }
            } catch (error) {
                console.error("Error al obtener productos:", error);
            }

        products()

    
}

