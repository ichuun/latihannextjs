import { useRouter } from "next/router"

const Slug = () => {
    const router = useRouter();
    const { slug = [] } = router.query;
    console.log(slug);
    return (
        <div>
            <h1>slug {slug[0]}-{slug[1]}-{slug[2]}</h1>
        </div>
    )
}

export default Slug;
