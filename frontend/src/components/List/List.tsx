import { Button } from "@mui/material";
import { Professor } from "../../@types/Professor";
import { FormatadorService } from "../../services/FormatadorService";
import { Description, EmptyList, Info, ItemList, ListStyled, Name, Photo, Price } from "./List.style";

interface ListProps {
    professors: Professor[],
}

const List = (props: ListProps) => {
     return (
        <div>
            {props.professors.length > 0 ? (
                <ListStyled>
                    {props.professors.map(professor => (
                        <ItemList key={professor.id}>
                            <Photo src={professor.foto}></Photo>
                            <Info>
                                <Name>{professor.nome}</Name>
                                <Price>{FormatadorService.valorMonetario(professor.valor_hora)} por hora</Price>
                                <Description>{FormatadorService.limitarTexto(professor.descridao,200)}</Description>
                                <Button sx={{ width: '70%' }}>Marcar Aula com Kauan</Button>
                            </Info>
                        </ItemList>
                    ))}
                </ListStyled>
            ) : (
                <EmptyList>Nenhum item encontrado</EmptyList>
            )}
        </div>
    )
}

export default List;