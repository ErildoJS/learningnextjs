
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { id } = router.query //obrendo o parametro de rota

  return <p>Post: {id}</p>
}

export default Post