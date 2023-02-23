import { useRouter } from "next/router"

const index = () => {
    const router = useRouter();
    const { page, limit } = router.query
    return (
        <div>
            <h1>halaman blog : {page} limit {limit}</h1>
        </div>
    )
}

export default index
