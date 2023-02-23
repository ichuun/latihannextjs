import { useRouter } from "next/router"

const CommentId = () => {
    const router = useRouter();
    const { blogid, commentId } = router.query
    return (
        <div>
            <h2>Blog Dynamic Route: {blogid} - {commentId}</h2>
        </div>
    )
}

export default CommentId