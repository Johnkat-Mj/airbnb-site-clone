import { Container } from "components/atoms/Container";
import { CardHouse } from "components/molecules/cards/CardHouse";

export function Home({datas}) {
  return (
    <main className="mt-6">
        <Container className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 xl:gap-x-6 xl:gap-y-8">
            {datas.map(house=>(
                <CardHouse key={house.id} {...house}/>
            ))
            }
        </Container>
    </main>
  )
}
