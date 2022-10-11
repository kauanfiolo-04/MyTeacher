import { useEffect, useState } from "react";
import { Professor } from "../../@types/Professor";
import { ApiService } from "../../services/ApiService";

export function useIndex() {
    const [listProfessors, setListProfessors] = useState<Professor[]>([]);

    useEffect(()=>{
         ApiService.get('/professores').then((response) => {
           setListProfessors(response.data)
        })
    },[]);

    return {
        listProfessors
    }
}
