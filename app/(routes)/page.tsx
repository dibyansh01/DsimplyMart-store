import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

export const revalidation = 0;

const HomePage = async () => {
    const billboard = await getBillboard("c5caf959-156f-485f-9c60-52e363abcefd")
    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard}/>


            </div>
        </Container>
    );
}

export default HomePage;