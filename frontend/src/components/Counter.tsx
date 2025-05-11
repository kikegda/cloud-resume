import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

type VisitCounter = {
    count: number;
}

const Counter = () => {
    const BASE_URL = "https://enriquegdaresume-74700721345.europe-southwest1.run.app";
    
    useEffect(() => {
        fetch(BASE_URL + "/")
            .catch(err => console.error("Error registrando visita:", err));
        console.log("Visita registrada");
    }, []);

    const { data: contador, isLoading, isError } = useQuery<VisitCounter>({
        queryKey: ['contador'],
        queryFn: () => fetch(BASE_URL + "/visits").then(res => res.json()),
        refetchOnMount: "always",
        refetchInterval: false,
    });

    return (
        <div className="bg-white rounded-lg shadow p-4 text-center">
            <h2 className="text-xl font-semibold mb-2">Contador de visitas</h2>
            {isLoading && <p className="text-gray-500">Cargando...</p>}
            {isError && <p className="text-red-500">Error al cargar el contador</p>}
            {contador && (
                <div className="text-3xl font-bold text-blue-600">
                    {contador.count}
                </div>
            )}
        </div>
    );
}

export default Counter;